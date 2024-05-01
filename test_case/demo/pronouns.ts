type PronounsTestCase = ReadonlyArray<{ sentence: string; words: string[]; gt: string[][]; content_gpt3?: string; content_gpt4?: string; equation_gpt3?: string }>

// The `sentence` is the basic.
// the `words` are the words that need to be converted extracted from the sentence.
// the `gt` is the ground truth, the correct answer of the words should be spoken
// the `equation_gpt3` is equation that gpt 3 extract from the sentence

// Word checked 24 apr 2024
// GT Checked 26 apr 2024
export const romanNumberPronounTestCase: PronounsTestCase = [
  { sentence: 'I wanna buy Iphone X', words: ['I', 'X'], gt: [['I'], ['ten', 'X']], equation_gpt3: 'null' },
  {
    sentence: 'He lives on Route V and owns II cars',
    words: ['V', 'II'],
    gt: [
      ['five', 'V'],
      ['two', '2']
    ],
    equation_gpt3: 'null'
  },
  { sentence: 'King Louis IX will be in the city today on Andalusia street number XII', words: ['IX', 'XII'], gt: [['the Ninth', 'Ninth', 'nine'], ['twelve']], equation_gpt3: 'null' },
  { sentence: 'The movie starts at IV and ends at VI', words: ['IV', 'VI'], gt: [['four'], ['six']], equation_gpt3: 'null' },
  { sentence: 'The chapter XV of the book is longer than chapter XX', words: ['XV', 'XX'], gt: [['fifteen'], ['twenty']], equation_gpt3: 'null' },
  { sentence: 'He finished third in the race, marked as III, and used engine X', words: ['III,', 'X'], gt: [['three,'], ['ten', 'X']], equation_gpt3: 'null' }
]

// Word checked 24 apr 2024
// GT Checked 26 apr 2024
export const mathEquations: PronounsTestCase = [
  {
    sentence: 'For the equation E = mc^2, where E stands for energy and c is the speed of light in vacuum',
    words: ['E', '=', 'mc^2,', 'E', 'c'],
    gt: [['E', 'Energy'], ['equals'], ['em see squared', 'em c squared', 'm c squared', 'mc^2,'], ['E'], ['c']],
    equation_gpt3: 'E = mc^2'
  },
  {
    sentence: 'In the formula V = IR, where V represents voltage, I is current, and R is resistance',
    words: ['V', '=', 'IR,', 'V', 'I', 'R'],
    gt: [['V', 'vee', 'voltage'], ['equals'], ['I R', 'I times R', 'eye are', 'current times resistance'], ['V', 'vee'], ['I', 'eye'], ['R', 'are']],
    equation_gpt3: 'V = IR'
  },
  {
    sentence: 'The area of a circle can be calculated using the formula A = pi*r^2, where pi is approximately 3.14159',
    words: ['A', '=', 'pi*r^2,', 'pi', '3.14159'],
    gt: [['Area', 'A'], ['equals'], ['pi times r squared', 'pi r squared', 'pi*r^2,'], ['pi', 'phi'], ['three point one four one five nine', '3 point 1 4 1 5 9']],
    equation_gpt3: 'A = pi*r^2'
  },
  {
    sentence: 'If the probability P(E) of event E happening is 1/X, this indicates a uniform distribution',
    words: ['P(E)', 'E', '1/X,'],
    gt: [['P of E', 'P(E)'], ['E'], ['one over X', '1 over X']],
    equation_gpt3: 'P(E) = 1/X'
  },
  {
    sentence: 'To solve for x in the equation 2x^3 + 3x - 5 = 0, use the cubic formula',
    words: ['x', '2x^3', '+', '3x', '-', '5', '=', '0,'],
    gt: [['x'], ['two x cubed', 'two x power three', '2x^3'], ['plus'], ['three x', '3x'], ['minus'], ['five'], ['equals'], ['zero.']],
    equation_gpt3: '2x^3 + 3x - 5 = 0'
  }
]

// Word checked 24 apr 2024
// GT Checked 26 apr 2024
export const demoTestCase: PronounsTestCase = [
 
  {
    sentence:
      'English vowels include the letters A, E, I, O, U, and occasionally Y when it functions as a vowel, as in "mystery" or "gym." These letters can represent various sounds, including short vowels (e.g., "cat," "bed," "sit"), long vowels (e.g., "cake," "seed," "bike"), and diphthongs, which are complex sounds formed by the combination of two vowel sounds within the same syllable (e.g., "coin," "loud")..',
    words: ['A,', 'E,', 'I,', 'O,', 'U,', 'Y', '"mystery"', '"gym."', '(e.g.,', '"cat,"', '"bed,"', '"sit"),', '(e.g.,', '"cake,"', '"seed,"', '"bike"),', '(e.g.,', '"coin,"', '"loud")..'],
    gt: [
      ['A,'],
      ['E,'],
      ['I,'],
      ['O,'],
      ['U,'],
      ['Y'],
      ['"mystery"'],
      ['gym', '"gym."'],
      ['for example', '(e.g.,'],
      ['cat', '"cat,"'],
      ['bed', '"bed,"'],
      ['sit', '"sit"),'],
      ['for example', '(e.g.,'],
      ['cake', '"cake,"'],
      ['seed', '"seed,"'],
      ['bike', '"bike"),'],
      ['for example', '(e.g.,'],
      ['coin', '"coin,"'],
      ['loud.', '"loud")..']
    ],
    equation_gpt3: 'null'
  },
  // The rest is in demo website
]

// Word checked 24 apr 2024
// GT checked 26 apr 2024
export const physicalEquations: PronounsTestCase = [
  {
    sentence:
      'The Stefan-Boltzmann law is typically written as P = σ*A*T^4, where P is the power radiated per unit area of a black body, σ is the Stefan-Boltzmann constant, A is the area, and T is the absolute temperature of the black body.',
    words: ['Stefan-Boltzmann', 'P', '=', 'σ*A*T^4,', 'P', 'σ', 'Stefan-Boltzmann', 'A', 'T'],
    gt: [
      ['Stefan-Boltzmann'],
      ['P'],
      ['equals'],
      ['sigma times A times T raised to the power of four,', 'sigma times A times T to the power of four'],
      ['P'],
      ['sigma'],
      ['Stefan-Boltzmann'],
      ['A', 'area'],
      ['T']
    ],
    equation_gpt3: 'P = σ*A*T^4'
  },
  // The rest is in demo website
]

// Word checked 24 apr 2024
// GT checked 26 apr 2024
export const computerScienceTestCase: PronounsTestCase = [
  {
    sentence: "Dijkstra's algorithm updates distances from the source to all vertices using the relaxation step: if dist[v] > dist[u] + weight(u, v), then dist[v] = dist[u] + weight(u, v).",
    words: ['dist[v]', '>', 'dist[u]', '+', 'weight(u,', 'v),', 'dist[v]', '=', 'dist[u]', '+', 'weight(u,', 'v).'],
    gt: [
      ['dist of v', 'distance of v', 'dist[v]'],
      ['greater than', '>'],
      ['dist of u', 'distance of u', 'dist[u]'],
      ['plus', '+'],
      ['weight of u', 'weight(u,'],
      ['v', 'v),'],
      ['dist of v', 'distance of v', 'dist[v]'],
      ['equals', '=', 'is updated to'],
      ['dist of u', 'distance of u', 'dist[u]'],
      ['plus', '+'],
      ['weight of u', 'weight(u,'],
      ['v', 'v).']
    ],
    equation_gpt3: 'dist[v] > dist[u] + weight(u, v)\ndist[v] = dist[u] + weight(u, v)'
  },
  // The rest is in demo website
]

// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const machineLeaningTestCase: PronounsTestCase = [
  // The rest is in demo website
]

// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const biologyTestCase: PronounsTestCase = [
  // The rest is in demo website
]
// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const chemistryTestCase: PronounsTestCase = [
  // The rest is in demo website
]