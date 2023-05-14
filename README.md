# Bíblia sagrada JS

## Descrição

Lib que cria uma Bíblia Sagrada em diferentes versões

## Como usar

***

### Criar a instância da bíblia

```ts

import { createBiblieInstance } from 'biblia-sagrada-js';

const biblie = createBiblieInstance('nvi');

```

### Selecionar um capítulo específico

```ts

const biblie = createBiblieInstance('nvi');

biblie.getChapter('Êxodo', 2);

```

Resultado:

```ts

[
  'Um homem da tribo de Levi casou-se com uma mulher da mesma tribo,',
  'e ela engravidou e deu à luz um filho. Vendo que era bonito, ela o escondeu por três meses.',
  'Quando já não podia mais escondê-lo, pegou um cesto feito de junco e o vedou com piche e betume. Colocou nele o menino e deixou o cesto entre os juncos, à margem do Nilo.',
  'A irmã do menino ficou observando de longe para ver o que lhe aconteceria.',
  'A filha do faraó descera ao Nilo para tomar banho. Enquanto isso as suas servas andavam pela margem do rio. Nisso viu o cesto entre os juncos e mandou sua criada apanhá-lo.',
  'Ao abri-lo viu um bebê chorando. Ficou com pena dele e disse: "Este menino é dos hebreus".',
  'Então a irmã do menino aproximou-se e perguntou à filha do faraó: "A senhora quer que eu vá chamar uma mulher dos hebreus para amamentar e criar o menino? "',
  '"Quero", respondeu ela. E a moça foi chamar a mãe do menino.',
  'Então a filha do faraó disse à mulher: "Leve este menino e amamente-o para mim, e eu lhe pagarei por isso". A mulher levou o menino e o amamentou.',
  'Tendo o menino crescido, ela o levou à filha do faraó, que o adotou e lhe deu o nome de Moisés, dizendo: "Porque eu o tirei das águas".',
  'Certo dia, sendo Moisés já adulto, foi ao lugar onde estavam os seus irmãos hebreus e descobriu como era pesado o trabalho que realizavam. Viu também um egípcio espancar um dos hebreus.',
  'Correu o olhar por todos os lados e, não vendo ninguém, matou o egípcio e o escondeu na areia.',
  'No dia seguinte saiu e viu dois hebreus brigando. Então perguntou ao agressor: "Por que você está espancando o seu companheiro? "',
  'O homem respondeu: "Quem o nomeou líder e juiz sobre nós? Quer matar-me como matou o egípcio? " Moisés teve medo e pensou: "Com certeza tudo já foi descoberto! "',
  'Quando o faraó soube disso, procurou matar Moisés, mas este fugiu e foi morar na terra de Midiã. Ali assentou-se à beira de um poço.',
  'Ora, o sacerdote de Midiã tinha sete filhas. Elas foram buscar água para encher os bebedouros e dar de beber ao rebanho de seu pai.',
  'Alguns pastores se aproximaram e começaram a expulsá-las dali; Moisés, porém, veio em auxílio delas e deu água ao rebanho.',
  'Quando as moças voltaram a seu pai Reuel, este lhes perguntou: "Por que voltaram tão cedo hoje? "',
  'Elas responderam: "Um egípcio defendeu-nos dos pastores e ainda tirou água do poço para nós e deu de beber ao rebanho".',
  '"Onde está ele? ", perguntou o pai a elas. "Por que o deixaram lá? Convidem-no para comer conosco. "',
  'Moisés aceitou e concordou também em morar na casa daquele homem; este lhe deu por mulher sua filha Zípora.',
  'Ela deu à luz um menino, a quem Moisés deu o nome de Gérson, dizendo: "Sou imigrante em terra estrangeira".',
  'Muito tempo depois, morreu o rei do Egito. Os israelitas gemiam e clamavam debaixo da escravidão; e o seu clamor subiu até Deus.',
  'Ouviu Deus o lamento deles e lembrou-se da aliança que fizera com Abraão, Isaque e Jacó.',
  'Deus olhou para os israelitas e viu qual era a situação deles.'
]

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
