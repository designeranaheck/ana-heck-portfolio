# Portfólio — Ana Heck

Site de portfólio da Ana Heck (Sênior Product Designer), implementado a partir do
design `Ana Heck Portfolio.dc.html` (Claude Design).

## Stack

- Angular 20 (standalone components, signals, rotas com lazy loading)
- TypeScript 5.9
- Bootstrap 4.5 (reboot, grid e utilitários) + SCSS com tema da empresa

## Rodando

```bash
npm install
npm start
```

App em `http://localhost:4200`.

```bash
npm run build   # build de produção em dist/portfolio
```

## Estrutura

Organização por feature:

```
src/
  styles/                    tema (_bootstrap, _theme, _primitives)
  app/
    layout/                  site-header, site-footer
    ui/                      contact-section, project-card, experience-card
    shared/
      directives/            reveal-on-scroll, scroll-to-top
      models/                tipos do portfólio
      data/                  conteúdo (projetos, experiências, artigos)
    features/
      home/                  landing page
      projetos/              lista de projetos com filtro por tag
      sobre/                  bio, trajetória e competências
      artigos/               índice de artigos
        artigo/              artigo individual (rota /artigos/:slug)
```

## Pendências de conteúdo

O design entrega os projetos como placeholders (`Nome do projeto`, descrição
genérica). Os cards em `shared/data/projects.ts` mantêm esse texto — basta
substituir por projetos reais. Imagens e retratos são placeholders (`.ph`).
