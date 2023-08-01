# Bíblia sagrada JS

## Descrição

Lib que cria uma Bíblia Sagrada em diferentes versões

## Como usar

***

### Criar a instância da bíblia

```ts

import { createBibleInstance } from 'biblia-sagrada-js';

const bible = createBibleInstance('nvi');

```

### Selecionar um livro da bíblia

```ts

bible.getBook('João');

```

### Selecionar um capítulo específico

```ts

const bible = createBiblieInstance('nvi');

bible.getChapter('Êxodo', 2);

```

### Selecionar todos os versículos da Bíblia

```ts

const biblie = createBiblieInstance('nvi');

biblie.getAllVerses();

```

Resultado:

```ts

[
  {
    abbrev: 'gn',
    chapters: [
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array]
    ],
    name: 'Gênesis'
  },
  {
    abbrev: 'ex',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array]
    ],
    name: 'Êxodo'
  },
  {
    abbrev: 'lv',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'Levítico'
  },
  {
    abbrev: 'nm',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array]
    ],
    name: 'Números'
  },
  {
    abbrev: 'dt',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array]
    ],
    name: 'Deuteronômio'
  },
  {
    abbrev: 'js',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'Josué'
  },
  {
    abbrev: 'jz',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'Juízes'
  },
  {
    abbrev: 'rt',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: 'Rute'
  },
  {
    abbrev: '1sm',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: '1 Samuel'
  },
  {
    abbrev: '2sm',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: '2 Samuel'
  },
  {
    abbrev: '1rs',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: '1 Reis'
  },
  {
    abbrev: '2rs',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: '2 Reis'
  },
  {
    abbrev: '1cr',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array]
    ],
    name: '1 Crônicas'
  },
  {
    abbrev: '2cr',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array]
    ],
    name: '2 Crônicas'
  },
  {
    abbrev: 'ed',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Esdras'
  },
  {
    abbrev: 'ne',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    name: 'Neemias'
  },
  {
    abbrev: 'et',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Ester'
  },
  {
    abbrev: 'jó',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array]
    ],
    name: 'Jó'
  },
  {
    abbrev: 'sl',
    chapters: [
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array], [Array], [Array],
      [Array], [Array],
      ... 50 more items
    ],
    name: 'Salmos'
  },
  {
    abbrev: 'pv',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'Provérbios'
  },
  {
    abbrev: 'ec',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Eclesiastes'
  },
  {
    abbrev: 'ct',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Cânticos'
  },
  {
    abbrev: 'is',
    chapters: [
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array]
    ],
    name: 'Isaías'
  },
  {
    abbrev: 'jr',
    chapters: [
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array], [Array],
      [Array], [Array]
    ],
    name: 'Jeremias'
  },
  {
    abbrev: 'lm',
    chapters: [ [Array], [Array], [Array], [Array], [Array] ],
    name: 'Lamentações de Jeremias'
  },
  {
    abbrev: 'ez',
    chapters: [
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array],
      [Array], [Array], [Array], [Array]
    ],
    name: 'Ezequiel'
  },
  {
    abbrev: 'dn',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Daniel'
  },
  {
    abbrev: 'os',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Oséias'
  },
  {
    abbrev: 'jl',
    chapters: [ [Array], [Array], [Array] ],
    name: 'Joel'
  },
  {
    abbrev: 'am',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    name: 'Amós'
  },
  { abbrev: 'ob', chapters: [ [Array] ], name: 'Obadias' },
  {
    abbrev: 'jn',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: 'Jonas'
  },
  {
    abbrev: 'mq',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    name: 'Miquéias'
  },
  {
    abbrev: 'na',
    chapters: [ [Array], [Array], [Array] ],
    name: 'Naum'
  },
  {
    abbrev: 'hc',
    chapters: [ [Array], [Array], [Array] ],
    name: 'Habacuque'
  },
  {
    abbrev: 'sf',
    chapters: [ [Array], [Array], [Array] ],
    name: 'Sofonias'
  },
  { abbrev: 'ag', chapters: [ [Array], [Array] ], name: 'Ageu' },
  {
    abbrev: 'zc',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array]
    ],
    name: 'Zacarias'
  },
  {
    abbrev: 'ml',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: 'Malaquias'
  },
  {
    abbrev: 'mt',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: 'Mateus'
  },
  {
    abbrev: 'mc',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: 'Marcos'
  },
  {
    abbrev: 'lc',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'Lucas'
  },
  {
    abbrev: 'jo',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array]
    ],
    name: 'João'
  },
  {
    abbrev: 'atos',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: 'Atos'
  },
  {
    abbrev: 'rm',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: 'Romanos'
  },
  {
    abbrev: '1co',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: '1 Coríntios'
  },
  {
    abbrev: '2co',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    name: '2 Coríntios'
  },
  {
    abbrev: 'gl',
    chapters: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    name: 'Gálatas'
  },
  {
    abbrev: 'ef',
    chapters: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    name: 'Efésios'
  },
  {
    abbrev: 'fp',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: 'Filipenses'
  },
  {
    abbrev: 'cl',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: 'Colossenses'
  },
  {
    abbrev: '1ts',
    chapters: [ [Array], [Array], [Array], [Array], [Array] ],
    name: '1 Tessalonicenses'
  },
  {
    abbrev: '2ts',
    chapters: [ [Array], [Array], [Array] ],
    name: '2 Tessalonicenses'
  },
  {
    abbrev: '1tm',
    chapters: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    name: '1 Timóteo'
  },
  {
    abbrev: '2tm',
    chapters: [ [Array], [Array], [Array], [Array] ],
    name: '2 Timóteo'
  },
  {
    abbrev: 'tt',
    chapters: [ [Array], [Array], [Array] ],
    name: 'Tito'
  },
  { abbrev: 'fm', chapters: [ [Array] ], name: 'Filemom' },
  {
    abbrev: 'hb',
    chapters: [
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array], [Array],
      [Array]
    ],
    name: 'Hebreus'
  },
  {
    abbrev: 'tg',
    chapters: [ [Array], [Array], [Array], [Array], [Array] ],
    name: 'Tiago'
  },
  {
    abbrev: '1pe',
    chapters: [ [Array], [Array], [Array], [Array], [Array] ],
    name: '1 Pedro'
  },
  {
    abbrev: '2pe',
    chapters: [ [Array], [Array], [Array] ],
    name: '2 Pedro'
  },
  {
    abbrev: '1jo',
    chapters: [ [Array], [Array], [Array], [Array], [Array] ],
    name: '1 João'
  },
  { abbrev: '2jo', chapters: [ [Array] ], name: '2 João' },
  { abbrev: '3jo', chapters: [ [Array] ], name: '3 João' },
  { abbrev: 'jd', chapters: [ [Array] ], name: 'Judas' },
  {
    abbrev: 'ap',
    chapters: [
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array], [Array], [Array],
      [Array]
    ],
    name: 'Apocalipse'
  }
]

```
