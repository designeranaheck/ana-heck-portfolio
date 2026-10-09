// Gera api/_knowledge.ts a partir dos dados do site, para o chat "Pergunte à Ana".
// Rode `node scripts/generate-knowledge.mjs` sempre que experiências, formação ou artigos mudarem.
import { build } from 'esbuild';
import { writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const dir = mkdtempSync(join(tmpdir(), 'knowledge-'));
const entry = join(dir, 'entry.ts');
const out = join(dir, 'out.mjs');
const data = join(process.cwd(), 'src/app/shared/data');

writeFileSync(
  entry,
  `export * from '${data}/experiences';
export * from '${data}/education';
export * from '${data}/testimonials';
export * from '${data}/articles';`,
);
await build({ entryPoints: [entry], bundle: true, format: 'esm', outfile: out, logLevel: 'error' });
const { EXPERIENCES, EDUCATION, CERTIFICATIONS, TESTIMONIALS, ARTICLES } = await import(
  pathToFileURL(out).href
);
rmSync(dir, { recursive: true, force: true });

const lines = [];
lines.push('## Experiência profissional');
for (const e of EXPERIENCES) lines.push(`- ${e.role}, ${e.company} (${e.period}): ${e.description}`);

lines.push('', '## Formação');
for (const e of EDUCATION) lines.push(`- ${e.institution}: ${e.degree} (${e.period})`);

lines.push('', '## Cursos e eventos');
for (const c of CERTIFICATIONS) lines.push(`- ${c.title}${c.year ? ` (${c.year})` : ''}`);

lines.push('', '## Depoimentos');
for (const t of TESTIMONIALS) lines.push(`- ${t.name}, ${t.role}: "${t.quote}"`);

lines.push('', '## Cases e artigos (portfólio)');
for (const a of ARTICLES) {
  lines.push('', `### ${a.title} (${a.kicker}, ${a.meta}) - https://anaheck.vercel.app/artigos/${a.slug}`);
  for (const b of a.body) {
    if (b.kind === 'paragraph' || b.kind === 'heading') lines.push(b.text);
    else if (b.kind === 'list') for (const i of b.items) lines.push(`- ${i}`);
  }
}

const text = lines.join('\n');
writeFileSync(
  'api/_knowledge.js',
  `// Arquivo gerado por scripts/generate-knowledge.mjs. Não edite manualmente.\nmodule.exports = { KNOWLEDGE: ${JSON.stringify(text)} };\n`,
);
console.log(`api/_knowledge.js: ${text.length} caracteres`);
