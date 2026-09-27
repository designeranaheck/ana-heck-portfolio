import { Certification, Education } from '../models/portfolio.models';

export const EDUCATION: Education[] = [
  {
    institution: 'SATC',
    degree: 'Curso Técnico em Comunicação Visual',
    degreeEn: 'Technical Course in Visual Communication',
    period: '2010 — 2011',
  },
  {
    institution: 'SATC',
    degree: 'Bacharel em Design',
    degreeEn: "Bachelor's Degree in Design",
    period: '2013 — 2016',
  },
  {
    institution: 'Certificação em UX',
    institutionEn: 'UX Certification',
    degree: 'Formação em UX, UI e Product Design',
    degreeEn: 'UX, UI and Product Design Program',
    period: '2022',
  },
  {
    institution: 'UNIFATEC · Toronto School of Management',
    degree: 'MBA em UX Research, Operações de Pesquisa e Liderança em Design',
    degreeEn: 'MBA in UX Research, Research Operations and Design Leadership',
    period: '2023 — 2024',
  },
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Codecon Summit', titleEn: 'Codecon Summit', year: '2025, 2026' },
  { title: 'Front in Floripa', titleEn: 'Front in Floripa', year: '2025' },
  { title: 'LUPA, Laboratório de UX Research', titleEn: 'LUPA, UX Research Lab', year: '2023' },
  { title: 'Triplo UX', titleEn: 'Triplo UX', year: '2023' },
  {
    title: 'Seminário UX Design: Design System, DesignOps e Liderança',
    titleEn: 'UX Design Seminar: Design System, DesignOps and Leadership',
    year: '2022',
  },
  { title: 'Primeiros passos em Programação', titleEn: 'Intro to Programming', year: '2021' },
  { title: 'Proficiência em Língua Inglesa', titleEn: 'English Language Proficiency', year: '2020' },
  { title: 'Workshop IA/UX LAB', titleEn: 'Workshop IA/UX LAB' },
];
