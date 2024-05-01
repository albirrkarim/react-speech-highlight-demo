type PronounsTestCase = ReadonlyArray<{ sentence: string; words: string[]; gt: string[][]; content_gpt3?: string; content_gpt4?: string; equation_gpt3?: string }>

// The `sentence` is the basic.
// the `words` are the words that need to be converted extracted from the sentence.
// the `gt` is the ground truth, the correct answer of the words should be spoken
// the `content` string resulted from open ai model.

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
    sentence: 'Try your text here (I limit max 100 character).',
    words: ['(I', '100'],
    gt: [
      ['eye', '(I'],
      ['one hundred', '100']
    ],
    equation_gpt3: 'null'
  },
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
  {
    sentence:
      'This category includes sounds such as the hard "c" in "cat," the "b" in "bed," the "t" in "sit," the "g" in "go," and the "d" in "dog." English has 21 consonant letters that represent more consonant sounds due to various pronunciation patterns, including voiced and voiceless pairs like "b" and "p" or "d" and "t," which differ mainly in the use of vocal cord vibration..',
    words: ['"c"', '"cat,"', '"b"', '"bed,"', '"t"', '"sit,"', '"g"', '"go,"', '"d"', '"dog."', '21', '"b"', '"p"', '"d"', '"t,"'],
    gt: [
      ['"c"'],
      ['cat'],
      ['"b"'],
      ['bed'],
      ['"t"'],
      ['"sit,"'],
      ['"g"'],
      ['"go,"'],
      ['"d"'],
      ['"dog."', 'dog'],
      ['twenty-one', '21'],
      ['bee', '"b"'],
      ['pee', '"p"'],
      ['dee', '"d"'],
      ['tee', '"t,"']
    ],
    equation_gpt3: 'null'
  },
  { sentence: 'I integrate with chat GPT to translate the number into word form number in different language.', words: ['I', 'GPT'], gt: [['I'], ['GPT']], equation_gpt3: 'null' },
  { sentence: 'I can read the following number:.', words: ['I'], gt: [['I']], equation_gpt3: 'null' },
  { sentence: '1000', words: ['1000'], gt: [['one thousand']], equation_gpt3: '1000' },
  { sentence: '4090', words: ['4090'], gt: [['four thousand and ninety', 'four thousand ninety', 'four zero nine zero']], equation_gpt3: 'null' },
  { sentence: '1.000.000', words: ['1000000'], gt: [['one million']], equation_gpt3: 'null' },
  { sentence: '1,2', words: ['1.2'], gt: [['one point two', '1.2']], equation_gpt3: 'null' },
  { sentence: '5,304578', words: ['5.304578'], gt: [['five point three zero four five seven eight']], equation_gpt3: 'null' },
  { sentence: '9.001', words: ['9001'], gt: [['nine point zero zero one']], equation_gpt3: '9.001' },
  { sentence: '30,1', words: ['30.1'], gt: [['thirty point one']], equation_gpt3: 'null' },
  { sentence: 'This is an example of a multi-paragraph in a blog post.', words: ['multi-paragraph'], gt: [['multi-paragraph']], equation_gpt3: 'null' },
  { sentence: 'Their tongues have tiny, backward-facing barbs that help remove dirt and keep their fur clean..', words: ['backward-facing'], gt: [['backward-facing']], equation_gpt3: 'null' },
  {
    sentence: 'Les premières traces de chats domestiques remontent à plus de 9000 ans, en Égypte où ils étaient vénérés comme des divinités.',
    words: ['9000'],
    gt: [['nine thousand']],
    equation_gpt3: 'null'
  },
  {
    sentence:
      'This extensive article delves into the rich tapestry of the feline world, exploring their history, diverse behaviors, physical attributes, and the profound impact they have on human well-being..',
    words: ['well-being..'],
    gt: [['well-being..']],
    equation_gpt3: 'null'
  },
  {
    sentence: 'The earliest evidence of cats living alongside humans dates back approximately 9,000 years to the Fertile Crescent, the cradle of civilization.',
    words: ['9.000'],
    gt: [['nine thousand']],
    equation_gpt3: 'null'
  },
  { sentence: 'A Tapestry of Breeds.', words: ['A'], gt: [['A']], equation_gpt3: 'null' },
  {
    sentence:
      'Spaying and neutering, providing enriching environments, and supporting animal welfare organizations are steps everyone can take to contribute to the well-being of these fascinating creatures..',
    words: ['well-being'],
    gt: [['well-being']],
    equation_gpt3: 'null'
  },
  { sentence: 'Conclusion: A Bond Unbroken.', words: ['A'], gt: [['A']], equation_gpt3: 'null' }
]

// Word checked 24 apr 2024
// GT checked 26 apr 2024
export const physicalEquations: PronounsTestCase = [
  {
    sentence: 'According to the principle of conservation of energy, the total energy in an isolated system (E) remains constant, expressed as ΔE = 0.',
    words: ['(E)', 'ΔE', '=', '0.'],
    gt: [['E', 'total energy'], ['delta E', 'change in energy'], ['equals'], ['zero']],
    equation_gpt3: 'ΔE = 0'
  },
  {
    sentence:
      "Archimedes' principle can be formulated as F_b = ρ * V * g, where F_b is the buoyant force, ρ is the density of the fluid, V is the volume of the fluid displaced, and g is the acceleration due to gravity.",
    words: ["Archimedes'", 'F_b', '=', 'ρ', '*', 'V', '*', 'g,', 'F_b', 'ρ', 'V', 'g'],
    gt: [
      ['Archimedes'],
      ['F sub b', 'F_b'],
      ['equals'],
      ['rho'],
      ['times'],
      ['V', 'volume'],
      ['times'],
      ['g', 'gravity', 'acceleration due to gravity'],
      ['F sub b', 'F_b', 'buoyant force'],
      ['rho', 'ρ'],
      ['V', 'volume'],
      ['g']
    ],
    equation_gpt3: 'F_b = ρ * V * g'
  },
  {
    sentence:
      "Coulomb's law is mathematically expressed as F = k * (q1*q2)/r^2, where F is the magnitude of the electrostatic force between two charges, q1 and q2 are the amounts of the charges, r is the distance between the centers of the two charges, and k is Coulomb's constant.",
    words: ['F', '=', 'k', '*', '(q1*q2)/r^2,', 'F', 'q1', 'q2', 'r', 'k'],
    gt: [
      ['F', 'eff', 'the magnitude of the electrostatic force', 'the magnitude of the electrostatic force between two charges'],
      ['equals'],
      ['k', "k is Coulomb's constant", "Coulomb's constant"],
      ['times'],
      [
        'open parenthesis q one times q two close parenthesis divided by r squared',
        'open parenthesis q sub 1 times q sub 2 close parenthesis divided by r squared',
        'open parenthesis q sub 1 times q sub 2 close parenthesis over r squared',
        'the product of q1 and q2 divided by r squared',
        'q1 times q2 divided by r squared',
        'the quantity q1 times q2 divided by r squared'
      ],
      ['F'],
      ['q one', 'q1'],
      ['q two', 'q2'],
      ['r'],
      ['k']
    ],
    equation_gpt3: 'F = k * (q1*q2)/r^2'
  },
  {
    sentence:
      'The first law of thermodynamics is depicted by the equation ΔU = Q - W, where ΔU is the change in internal energy, Q is the heat added to the system, and W is the work done by the system.',
    words: ['ΔU', '=', 'Q', '-', 'W,', 'ΔU', 'Q', 'W'],
    gt: [['delta U', 'change in internal energy'], ['equals'], ['Q', 'heat'], ['minus'], ['W,', 'work'], ['delta U', 'ΔU'], ['Q'], ['W']],
    equation_gpt3: 'ΔU = Q - W'
  },
  {
    sentence:
      "Snell's law is given by n1*sin(θ1) = n2*sin(θ2), where n1 and n2 are the indices of refraction of the first and second media, and θ1 and θ2 are the angles of incidence and refraction, respectively.",
    words: ['n1*sin(θ1)', '=', 'n2*sin(θ2),', 'n1', 'n2', 'θ1', 'θ2'],
    gt: [
      ['en one times sine theta one', 'n one times sine theta one', 'n sub 1 times sine of theta sub 1', 'n1 times sine of theta 1'],
      ['equals'],
      ['en two times sine theta two', 'n two times sine theta two', 'n sub 2 times sine of theta sub 2', 'n2 times sine of theta 2'],
      ['en one', 'n 1', 'n sub 1'],
      ['en two', 'n 2', 'n sub 1'],
      ['theta one', 'theta 1', 'theta sub 1'],
      ['theta two', 'theta 2', 'theta sub 2']
    ],
    equation_gpt3: 'n1*sin(θ1) = n2*sin(θ2)'
  },
  {
    sentence:
      "The Doppler effect formula for waves in a moving medium is expressed as f' = f * (v + v_d)/(v - v_s), where f' is the observed frequency, f is the source frequency, v is the speed of waves in the medium, v_d is the speed of the detector relative to the medium, and v_s is the speed of the source relative to the medium.",
    words: ["f'", '=', 'f', '*', '(v', '+', 'v_d)/(v', '-', 'v_s),', "f'", 'f', 'v', 'v_d', 'v_s'],
    gt: [
      ['f prime'],
      ['equals'],
      ['f'],
      ['times'],
      ['open parenthesis v'],
      ['plus'],
      ['v sub d close parenthesis divided by open parenthesis v', 'v sub d close parenthesis over open parenthesis v', 'v d divided by v'],
      ['minus'],
      ['v sub s close parenthesis', 'v s close parenthesis', 'v s close parenthesis comma'],
      ['f prime'],
      ['f'],
      ['v'],
      ['v sub d', 'v_d'],
      ['v sub s', 'v_s']
    ],
    equation_gpt3: "f' = f * (v + v_d)/(v - v_s)"
  },
  {
    sentence:
      "Newton's law of universal gravitation is summarized by F = G * (m1*m2)/r^2, where F is the gravitational force between two masses, m1 and m2, r is the distance between the centers of the masses, and G is the gravitational constant.",
    words: ['F', '=', 'G', '*', '(m1*m2)/r^2,', 'F', 'm1', 'm2,', 'r', 'G'],
    gt: [
      ['F'],
      ['equals'],
      ['G', 'G is the gravitational constant', 'gravitational constant'],
      ['times'],
      [
        'mass one times mass two divided by r squared',
        'm one times m two divided by r squared',
        'm1 times m2 divided by r squared',
        'open parenthesis m sub 1 times m sub 2 close parenthesis divided by r squared'
      ],
      ['F'],
      ['m one', 'mass one', 'm sub 1', 'm1'],
      ['m two,', 'mass two', 'm sub 2', 'm2'],
      ['r'],
      ['G']
    ],
    equation_gpt3: 'F = G * (m1*m2)/r^2'
  },
  {
    sentence:
      "Pascal's law is described by ΔP = ρ*g*Δh, indicating that the pressure change (ΔP) at any point in a fluid at rest under the influence of gravity depends only on the vertical change in height (Δh), the fluid density (ρ), and the acceleration due to gravity (g).",
    words: ['ΔP', '=', 'ρ*g*Δh,', '(ΔP)', '(Δh),', '(ρ),', '(g).'],
    gt: [['delta P'], ['equals'], ['rho times g times delta h'], ['delta P'], ['delta h'], ['rho', 'fluid density', 'density'], ['g.', 'g']],
    equation_gpt3: 'ΔP = ρ*g*Δh'
  },
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
  {
    sentence: "Faraday's law of electromagnetic induction is quantified by the equation ε = -dΦB/dt, where ε is the electromotive force, and ΦB is the magnetic flux through the circuit.",
    words: ['ε', '=', '-dΦB/dt,', 'ε', 'ΦB'],
    gt: [['epsilon', 'electromotive force'], ['equals'], ['negative dee phi B over dee tee', 'negative d phi B over d t'], ['epsilon'], ['Phi B', 'phi sub B']],
    equation_gpt3: 'ε = -dΦB/dt'
  }
]

// Word checked 24 apr 2024
// GT checked 26 apr 2024
export const computerScienceTestCase: PronounsTestCase = [
  {
    sentence: 'The time complexity of an algorithm is commonly expressed as O(n), where n represents the size of the input data set.',
    words: ['O(n),', 'n'],
    gt: [['big O of n'], ['n']],
    equation_gpt3: 'O(n)'
  },
  {
    sentence:
      'The formula for calculating the hash of a given input using the division method is hash(x) = x mod table_size, where x is the input and table_size is the number of buckets in the hash table.',
    words: ['hash', 'a', 'hash(x)', '=', 'x', 'mod', 'table_size,', 'x', 'table_size', 'hash'],
    gt: [['hash'], ['a'], ['hash of x', 'hash(x)'], ['equals', '='], ['x'], ['mod'], ['table size', 'table_size,'], ['x'], ['table size', 'table_size'], ['hash']],
    equation_gpt3: 'hash(x) = x mod table_size'
  },
  {
    sentence: "Shannon's entropy formula H(X) = -sum(p(x) * log2(p(x))) calculates the amount of information in a random variable X, where p(x) is the probability of occurrence of state x.",
    words: ['H(X)', '=', '-sum(p(x)', '*', 'log2(p(x)))', 'X,', 'p(x)', 'x'],
    gt: [['H of X', 'H(X)'], ['equals', '='], ['negative sum of p of x', '-sum(p(x)'], ['times', '*'], ['log base two of p of x', 'log2(p(x)))'], ['X,'], ['p of x', 'p(x)'], ['x']],
    equation_gpt3: 'H(X) = -sum(p(x) * log2(p(x)))'
  },
  {
    sentence:
      "The RSA encryption key is generated using the equation e*d mod φ(n) = 1, where e is the public key exponent, d is the private key exponent, and φ(n) is the Euler's totient function of n.",
    words: ['RSA', 'e*d', 'mod', 'φ(n)', '=', '1.', 'e', 'd', 'φ(n)', 'n'],
    gt: [['RSA'], ['e times d'], ['mod'], ['phi of n'], ['equals'], ['one'], ['e'], ['d'], ['phi of n'], ['n']],
    equation_gpt3: 'e*d mod φ(n) = 1'
  },
  {
    sentence: "Big O notation describes the upper bound of an algorithm's running time, for example, quicksort's average case can be expressed as O(n log n).",
    words: ['O', 'O(n', 'log', 'n).'],
    gt: [['O'], ['O of n'], ['log'], ['n']],
    equation_gpt3: 'O(n log n)'
  },
  {
    sentence:
      'In machine learning, the error gradient in a neural network is calculated using the backpropagation algorithm, specifically, the partial derivative of the error with respect to each weight is ΔE/Δw_i.',
    words: ['ΔE/Δw_i.'],
    gt: [['Delta E over Delta w sub i', 'the change in E over the change in w sub i']],
    equation_gpt3: 'ΔE/Δw_i'
  },
  {
    sentence:
      'A* search algorithm uses the formula f(n) = g(n) + h(n) to find the least cost path from a given node to the goal, where g(n) is the cost from the start node to n, and h(n) is the heuristic estimated cost from n to the goal.',
    words: ['A*', 'f(n)', '=', 'g(n)', '+', 'h(n)', 'g(n)', 'n', 'h(n)', 'n'],
    gt: [['A star'], ['f of n'], ['equals'], ['g of n'], ['plus'], ['h of n'], ['g of n'], ['n'], ['h of n'], ['n']],
    equation_gpt3: 'f(n) = g(n) + h(n)'
  },
  {
    sentence: 'The maximum flow in a network can be found using the Ford-Fulkerson algorithm, where the flow must satisfy the capacity constraint: 0 ≤ f(u, v) ≤ c(u, v) for every edge (u, v).',
    words: ['Ford-Fulkerson', '0', '≤', 'f(u,', 'v)', '≤', 'c(u,', 'v)', '(u,', 'v)'],
    gt: [['Ford-Fulkerson'], ['zero'], ['less than or equal to'], ['f of u'], ['v)'], ['less than or equal to', 'is less than or equal to'], ['c of u'], ['v'], ['u'], ['v']],
    equation_gpt3: '0 ≤ f(u, v) ≤ c(u, v)'
  },
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
  {
    sentence:
      "The bandwidth-delay product, calculated as R * T, where R is the link bandwidth (bits per second) and T is the round-trip delay time (seconds), quantifies the amount of data 'in flight' at any point in time on a network link.",
    words: ['bandwidth-delay', 'R', '*', 'T,', 'R', 'T', 'round-trip', '(seconds),', "flight'"],
    gt: [['bandwidth-delay'], ['R'], ['times', '*'], ['T'], ['R'], ['T'], ['round-trip'], ['seconds'], ['flight']],
    equation_gpt3: 'R * T'
  }
]

// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const machineLeaningTestCase: PronounsTestCase = [
  {
    sentence:
      'In machine learning, the cost function often used in regression problems is the mean squared error, expressed as MSE = 1/n * sum((y_i - y_pred)^2), where y_i is the actual value and y_pred is the predicted value by the model.',
    words: ['MSE', '=', '1/n', '*', 'sum((y_i', '-', 'y_pred)^2),', 'y_i', 'y_pred'],
    gt: [
      ['em ess ee', 'M S E', 'MSE'],
      ['equals', '='],
      ['one over en', 'one over n', '1/n'],
      ['times', '*'],
      ['sum of y sub i minus y sub pred squared', 'the sum of y sub i', 'sum((y_i'],
      ['minus', '-'],
      ['y sub pred squared', 'y_pred)^2),', 'y predicted squared'],
      ['y sub i', 'y_i'],
      ['y sub pred', 'y predicted', 'y_pred']
    ],
    equation_gpt3: 'MSE = 1/n * sum((y_i - y_pred)^2)'
  },
  {
    sentence:
      'The softmax function is used in classification models to convert logits to probabilities, with the formula P(class_i) = exp(z_i) / sum(exp(z_j) for all j), where z_i are the input logits.',
    words: ['P(class_i)', '=', 'exp(z_i)', '/', 'sum(exp(z_j)', 'for', 'all', 'j),', 'z_i'],
    gt: [
      ['P of class i', 'P(class_i)', 'Probability of class i'],
      ['equals'],
      ['exponential of z sub i', 'exp(z_i)'],
      ['divided by', '/'],
      ['sum of exponential of z sub j for all j', 'the sum of exponential of z sub j', 'sum(exp(z_j)'],
      ['for'],
      ['all'],
      ['j'],
      ['z sub i', 'z_i']
    ],
    equation_gpt3: 'P(class_i) = exp(z_i) / sum(exp(z_j) for all j)'
  },
  {
    sentence:
      'Support Vector Machines (SVMs) find the hyperplane that maximizes the margin between classes using the condition y_i * (w*x_i + b) >= 1 for all i in the training data, where w is the weight vector, b is the bias, and y_i are the labels.',
    words: ['(SVMs)', 'y_i', '*', '(w*x_i', '+', 'b)', '>=', '1', 'i', 'w', 'b', 'y_i'],
    gt: [
      ['SVMs', '(SVMs)'],
      ['y sub i', 'y_i'],
      ['times'],
      ['w times x sub i', '(w*x_i'],
      ['plus', '+'],
      ['b', 'b)', 'b is the bias'],
      ['greater than or equal to', '>='],
      ['one', '1'],
      ['i'],
      ['w'],
      ['b'],
      ['y sub i', 'y_i']
    ],
    equation_gpt3: 'y_i * (w*x_i + b) >= 1'
  },
  {
    sentence:
      'Gradient descent, a method to minimize the loss function, updates the weights using the formula w = w - alpha * dL/dw, where alpha is the learning rate and dL/dw is the gradient of the loss function with respect to the weights.',
    words: ['w', '=', 'w', '-', 'alpha', '*', 'dL/dw,', 'alpha', 'dL/dw'],
    gt: [
      ['double u', 'w'],
      ['equals'],
      ['double u', 'w'],
      ['minus'],
      ['alpha'],
      ['times'],
      ['dee L over dee double u', 'the derivative of L with respect to w', 'dL over dw', 'dL/dw,'],
      ['alpha'],
      ['dee L over dee double u', 'the derivative of L with respect to w', 'dL over dw', 'dL/dw']
    ],
    equation_gpt3: 'w = w - alpha * dL/dw'
  },
  {
    sentence:
      'The backpropagation algorithm for neural networks uses the chain rule to compute gradients, specifically, the update for each weight is delta_w = -learning_rate * partial_derivative(loss, w).',
    words: ['delta_w', '=', '-learning_rate', '*', 'partial_derivative(loss,', 'w).'],
    gt: [
      ['delta w', 'delta_w'],
      ['equals', '='],
      ['negative learning rate', '-learning_rate'],
      ['times'],
      ['partial derivative of loss', 'partial derivative of loss with respect to', 'partial_derivative(loss,'],
      ['with respect to w', 'w).']
    ],
    equation_gpt3: 'delta_w = -learning_rate * partial_derivative(loss, w)'
  },
  {
    sentence: 'The dropout technique in neural network training involves randomly setting a fraction p of input units to 0 at each update during training time, which helps prevent overfitting.',
    words: [],
    gt: [],
    equation_gpt3: 'null'
  },
  {
    sentence:
      "Principal Component Analysis (PCA) reduces dimensionality by projecting each data point onto only the first few principal components, which are the eigenvectors of the data's covariance matrix that correspond to the largest eigenvalues.",
    words: [],
    gt: [],
    equation_gpt3: 'null'
  },
  {
    sentence:
      'The update rule for a stochastic gradient descent (SGD) optimizer is given by theta_next = theta - eta * gradient, where eta is the step size and gradient is the gradient of the objective function calculated at theta.',
    words: ['theta_next', '=', 'theta', '-', 'eta', '*', 'gradient', 'eta', 'gradient', 'gradient', 'theta'],
    gt: [['theta_next'], ['equals'], ['theta'], ['minus'], ['eta'], ['times'], ['gradient'], ['eta'], ['gradient'], ['gradient'], ['theta']],
    equation_gpt3: 'theta_next = theta - eta * gradient'
  },
  {
    sentence:
      'The cross-entropy loss function in neural networks for binary classification problems is calculated using the formula L = -[y*log(y_hat) + (1-y)*log(1-y_hat)], where y is the true label and y_hat is the predicted probability.',
    words: ['cross-entropy', 'L', '=', '-[y*log(y_hat)', '+', '(1-y)*log(1-y_hat)],', 'y', 'y_hat'],
    gt: [
      ['cross-entropy'],
      ['L'],
      ['equals'],
      ['negative open square bracket y times log y hat', 'negative y times log y hat', '-[y*log(y_hat)'],
      ['plus'],
      [
        'open bracket one minus y close bracket times log one minus y hat',
        'open parenthesis one minus y close parenthesis times log of open parenthesis one minus y hat close parenthesis close square bracket',
        '(1-y)*log(1-y_hat)],'
      ],
      ['y'],
      ['y hat', 'y_hat']
    ],
    equation_gpt3: 'L = -[y*log(y_hat) + (1-y)*log(1-y_hat)]'
  },
  {
    sentence:
      'A convolutional neural network (CNN) applies filters to an input to create feature maps, mathematically represented by the convolution operation: output = sum(filter * input_region) + bias.',
    words: ['A', '(CNN)', 'output', '=', 'sum(filter', '*', 'input_region)', '+', 'bias.'],
    gt: [['A'], ['(CNN)', 'cnn'], ['output'], ['equals'], ['sum of filter', 'sum(filter'], ['times', 'multiplied by'], ['input region'], ['plus'], ['bias.']],
    equation_gpt3: 'output = sum(filter * input_region) + bias'
  },
  {
    sentence:
      'The regularization term in a machine learning model, such as L2 norm, is calculated using the formula L2 = lambda * sum(w_i^2), where lambda is the regularization parameter and w_i are the model weights.',
    words: ['L2', 'L2', '=', 'lambda', '*', 'sum(w_i^2),', 'lambda', 'w_i'],
    gt: [['L two', 'L2 norm', 'L2'], ['L two', 'L2'], ['equals'], ['lambda'], ['times'], ['sum of w sub i squared', 'the sum of w sub i squared', 'sum(w_i^2),'], ['lambda'], ['w sub i', 'w_i']],
    equation_gpt3: 'L2 = lambda * sum(w_i^2)'
  },
  {
    sentence:
      'The k-means clustering algorithm minimizes the within-cluster sum of squares (WCSS), calculated as sum(min(sum((x - mu)^2))), where x represents data points and mu represents the centroid of a cluster.',
    words: ['k-means', 'within-cluster', 'sum', '(WCSS),', 'sum(min(sum((x', '-', 'mu)^2))),', 'x', 'mu'],
    gt: [
      ['k-means'],
      ['within-cluster'],
      ['sum'],
      ['(WCSS),'],
      ['sum of minimum of sum of x', 'sum of min sum of x', 'sum of minimum of sum of square of difference between x'],
      ['minus', 'dash', 'and'],
      ['mu squared', 'mu raised to 2'],
      ['x'],
      ['mu']
    ],
    equation_gpt3: 'sum((x - mu)^2)'
  },
  {
    sentence: 'In decision trees, the Gini impurity of a node is calculated using the formula G = 1 - sum(p_i^2), where p_i is the probability of an object being classified to a particular class.',
    words: ['G', '=', '1', '-', 'sum(p_i^2),', 'p_i'],
    gt: [['G'], ['equals'], ['one', '1'], ['minus'], ['sum of p sub i squared,', 'the sum of p sub i squared', 'sum(p_i^2),'], ['p sub i', 'p_i']],
    equation_gpt3: 'G = 1 - sum(p_i^2)'
  },
  {
    sentence:
      "The AdaBoost algorithm adjusts weights of incorrectly classified instances by the learner at each iteration, updating the weights using the formula w = w * exp(alpha), where alpha is the learner's weight.",
    words: ['w', '=', 'w', '*', 'exp(alpha),'],
    gt: [['w'], ['equals'], ['w'], ['times', 'multiplied by'], ['exponential of alpha', 'e to the power of alpha', 'exp(alpha),']],
    equation_gpt3: 'w = w * exp(alpha)'
  },
  {
    sentence:
      'Recurrent Neural Networks (RNNs) update their hidden state with the formula h_t = f(W*x_t + U*h_(t-1) + b), where W and U are weight matrices, x_t is the input at time t, h_(t-1) is the previous hidden state, and b is the bias.',
    words: ['(RNNs)', 'h_t', '=', 'f(W*x_t', '+', 'U*h_(t-1)', '+', 'b),', 'W', 'U', 'x_t', 't', 'h_(t-1)', 'b'],
    gt: [
      ['rnns'],
      ['h sub t', 'h_t'],
      ['equals'],
      ['f of W times x sub t', 'f(W*x_t'],
      ['plus'],
      ['U times h sub t minus one.', 'U*h_(t-1)'],
      ['plus'],
      ['b),'],
      ['W', 'semicolon'],
      ['U'],
      ['x sub t', 'x_t'],
      ['t'],
      ['h sub t minus one.', 'h_(t-1)'],
      ['b']
    ],
    equation_gpt3: 'h_t = f(W*x_t + U*h_(t-1) + b)'
  },
  {
    sentence:
      'In natural language processing, the term frequency-inverse document frequency (TF-IDF) weighting scheme is computed as TF-IDF = TF * log(N/df), where TF is the term frequency, N is the total number of documents, and df is the number of documents containing the term.',
    words: ['frequency-inverse', '(TF-IDF)', 'TF-IDF', '=', 'TF', '*', 'log(N/df),', 'TF', 'N', 'df'],
    gt: [
      ['frequency-inverse'],
      ['(TF-IDF)'],
      ['TF-IDF'],
      ['equals'],
      ['TF'],
      ['times', 'multiplied by'],
      ['logarithm of N over d f.', 'log of N over df', 'log(N/df),'],
      ['T F', 'TF'],
      ['N'],
      ['d f', 'df']
    ],
    equation_gpt3: 'TF-IDF = TF * log(N/df)'
  },
  {
    sentence:
      'The learning rate decay in training neural networks can be applied using the formula eta_t = eta_0 / (1 + decay_rate * epoch_number), where eta_0 is the initial learning rate, decay_rate is the decay coefficient, and epoch_number is the current epoch number.',
    words: ['eta_t', '=', 'eta_0', '/', '(1', '+', 'decay_rate', '*', 'epoch_number),', 'eta_0', 'decay_rate', 'epoch_number'],
    gt: [
      ['eta sub t', 'eta_t'],
      ['equals'],
      ['eta sub zero', 'eta_0'],
      ['over', 'divided by'],
      ['one'],
      ['plus'],
      ['decay rate', 'decay_rate'],
      ['times', 'multiplied by'],
      ['epoch number'],
      ['eta sub zero', 'eta_0'],
      ['decay rate', 'decay_rate'],
      ['epoch number']
    ],
    equation_gpt3: 'eta_t = eta_0 / (1 + decay_rate * epoch_number)'
  },
  {
    sentence:
      'The expected maximization (EM) algorithm iteratively improves parameter estimates for models with latent variables, typically updating parameters using the formula theta_new = argmax_theta E[log L(data, theta | observed)].',
    words: ['(EM)', 'theta_new', '=', 'argmax_theta', 'E[log', 'L(data,', 'theta', '|', 'observed)].'],
    gt: [
      ['(E M)', '(EM)'],
      ['theta new', 'theta_new'],
      ['equals'],
      ['argmax theta', 'argmax_theta'],
      ['E of log', 'E open square bracket log', 'E[log'],
      ['L of data', 'L(data,'],
      ['theta'],
      ['or', 'vertical line', 'vertical bar', '|'],
      ['observed', 'observed close parenthesis close square bracket']
    ],
    equation_gpt3: 'theta_new = argmax_theta E[log L(data, theta | observed)]'
  },
  {
    sentence:
      "In anomaly detection, the Mahalanobis distance is used to measure the distance of a point from a distribution, calculated as D^2 = (x - mu)' * C^-1 * (x - mu), where x is the point, mu is the mean of the distribution, and C is the covariance matrix.",
    words: ['D^2', '=', '(x', '-', "mu)'", '*', 'C^-1', '*', '(x', '-', 'mu),'],
    gt: [['D squared'], ['equals'], ['(x'], ['minus'], ['mu close parenthesis', "mu)'"], ['times'], ['C inverse'], ['times'], ['(x'], ['minus'], ['mu),']],
    equation_gpt3: "D^2 = (x - mu)' * C^-1 * (x - mu)"
  }
]

// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const biologyTestCase: PronounsTestCase = [
  {
    sentence:
      'The Hardy-Weinberg equilibrium formula, p^2 + 2pq + q^2 = 1, predicts the genetic variation in a population under ideal conditions, where p and q represent the frequency of the dominant and recessive alleles, respectively.',
    words: ['Hardy-Weinberg', 'p^2', '+', '2pq', '+', 'q^2', '=', '1.', 'p', 'q'],
    gt: [['Hardy-Weinberg'], ['p squared', 'p^2'], ['plus'], ['two p q', '2pq'], ['plus'], ['p squared', 'q^2'], ['equals'], ['one', '1.'], ['p'], ['q']],
    equation_gpt3: 'p^2 + 2pq + q^2 = 1'
  },
  {
    sentence:
      'The Michaelis-Menten equation, v = (V_max * [S]) / (K_m + [S]), describes the rate of enzymatic reactions by relating reaction rate v to substrate concentration [S], where V_max is the maximum rate achieved by the system and K_m is the Michaelis constant.',
    words: ['Michaelis-Menten', 'v', '=', '(V_max', '*', '[S])', '/', '(K_m', '+', '[S]),', 'v', '[S],', 'V_max', 'K_m'],
    gt: [
      ['Michaelis-Menten'],
      ['vee', 'v'],
      ['equals'],
      ['V max', 'open parenthesis V max', '(V_max'],
      ['times'],
      ['S', 'open square bracket S close square bracket close parenthesis', 'open parenthesis S close parenthesis close parenthesis', 'substrate concentration', '[S])'],
      ['divided by', '/'],
      ['K m', 'open parenthesis K sub m', '(K_m', 'Michaelis constant'],
      ['plus'],
      ['S', 'open parenthesis S close parenthesis close parenthesis close parenthesis,', 'open square bracket S close square bracket close parenthesis', 'substrate concentration', '[S]),'],
      ['vee', 'v'],
      ['S', 'open square bracket S close square bracket', 'open bracket S close bracket,', '[S],'],
      ['V max', 'V_max'],
      ['K m', 'K sub m', 'K_m']
    ],
    equation_gpt3: 'v = (V_max * [S]) / (K_m + [S])'
  },
  {
    sentence:
      'The Lotka-Volterra equations, dN/dt = rN - aNP and dP/dt = bNP - mP, model the dynamics of biological systems in which two species interact, one as a predator and the other as prey, with N and P representing the prey and predator populations, respectively.',
    words: ['Lotka-Volterra', 'dN/dt', '=', 'rN', '-', 'aNP', 'dP/dt', '=', 'bNP', '-', 'mP,', 'N', 'P'],
    gt: [
      ['Lotka-Volterra'],
      ['dee en over dee tee', 'dN/dt'],
      ['equals'],
      ['are en', 'r N', 'rN'],
      ['minus'],
      ['ay en pee', 'aNP'],
      ['dee pee over dee tee', 'dP/dt'],
      ['equals'],
      ['bee en pee', 'bNP'],
      ['minus'],
      ['em pee', 'mP,'],
      ['en', 'N'],
      ['pee', 'P']
    ],
    equation_gpt3: 'dN/dt = rN - aNP\ndP/dt = bNP - mP'
  },
  {
    sentence:
      'The logistic growth model is expressed by the equation dN/dt = rN(1 - N/K), where N is the population size, r is the intrinsic rate of increase, and K is the carrying capacity of the environment.',
    words: ['dN/dt', '=', 'rN(1', '-', 'N/K),', 'N', 'r', 'K'],
    gt: [
      ['dee N over dee tee', 'dN over dt', 'dN/dt'],
      ['equals', '='],
      ['r N times one', 'rN times the quantity one', 'rN times open parenthesis one', 'rN(1'],
      ['minus', '-'],
      ['N over K', 'N/K),'],
      ['N'],
      ['r'],
      ['K']
    ],
    equation_gpt3: 'dN/dt = rN(1 - N/K)'
  },
  {
    sentence:
      "The equation for calculating the osmotic pressure of a solution is Π = iMRT, where Π is the osmotic pressure, M is the molarity of the solution, R is the gas constant, T is the temperature in Kelvin, and i is the van 't Hoff factor indicating the number of particles the solute dissociates into.",
    words: ['Π', '=', 'iMRT,', 'Π', 'M', 'R', 'T', 'i'],
    gt: [['Pi', 'Π'], ['equals', '='], ['i M R T', 'i times M times R times T,', 'iMRT,', 'imrt'], ['Pi', 'Π'], ['M'], ['R'], ['T'], ['i']],
    equation_gpt3: 'Π = iMRT'
  },
  {
    sentence:
      'The Gibbs free energy change (ΔG) for a biochemical reaction can be calculated using the equation ΔG = ΔH - TΔS, where ΔH is the change in enthalpy, T is the temperature, and ΔS is the change in entropy.',
    words: ['(ΔG)', 'ΔG', '=', 'ΔH', '-', 'TΔS,', 'ΔH', 'T', 'ΔS'],
    gt: [['Delta G', '(ΔG)'], ['Delta G', 'ΔG'], ['equals'], ['Delta H', 'ΔH'], ['minus', '-'], ['T Delta S', 'TΔS,'], ['Delta H', 'ΔH'], ['T'], ['Delta S', 'ΔS']],
    equation_gpt3: 'ΔG = ΔH - TΔS'
  },
  {
    sentence:
      'The Arrhenius equation, k = A*exp(-Ea/RT), models the temperature dependence of reaction rates in chemical kinetics, where k is the rate constant, A is the pre-exponential factor, Ea is the activation energy, R is the gas constant, and T is the temperature in Kelvin.',
    words: ['k', '=', 'A*exp(-Ea/RT),', 'k', 'A', 'pre-exponential', 'Ea', 'R', 'T'],
    gt: [
      ['k'],
      ['equals'],
      ['A times exponential of negative Ea over R T', 'A times exponential negative Ea divided by RT', 'A times exponential negative Ea over RT', 'A*exp(-Ea/RT),'],
      ['k'],
      ['A'],
      ['pre-exponential'],
      ['E a', 'Ea'],
      ['R'],
      ['T']
    ],
    equation_gpt3: 'k = A*exp(-Ea/RT)'
  },
  {
    sentence:
      'The equation for photosynthetic efficiency is defined as the ratio of the energy stored to the energy of light absorbed, quantitatively expressed as η = (energy stored in biomass) / (total solar energy absorbed by chlorophyll).',
    words: ['energy', 'stored', 'energy', 'absorbed', 'η', '=', '(energy', 'stored', 'in', 'biomass)', '/', '(total', 'solar', 'energy', 'absorbed', 'by', 'chlorophyll).'],
    gt: [
      ['energy'],
      ['stored'],
      ['energy'],
      ['absorbed'],
      ['eta', 'η'],
      ['equals', '='],
      ['energy'],
      ['stored'],
      ['in'],
      ['biomass)'],
      ['divided by', '/'],
      ['total'],
      ['solar'],
      ['energy'],
      ['absorbed'],
      ['by'],
      ['chlorophyll']
    ],
    equation_gpt3: 'η = (energy stored in biomass) / (total solar energy absorbed by chlorophyll)'
  }
]

// Word checked 25 apr 2024
// GT checked 26 apr 2024
export const chemistryTestCase: PronounsTestCase = [
  {
    sentence: 'The ideal gas law, PV = nRT, relates the pressure (P), volume (V), and temperature (T) of an ideal gas with the amount of gas (n) in moles and the ideal gas constant (R).',
    words: ['PV', '=', 'nRT', '(P)', '(V)', '(T)', '(n)', '(R)'],
    gt: [
      ['P times V', 'P V', 'PV', 'pressure times volume'],
      ['equals', '='],
      ['n times R times T', 'n R T,', 'nRT,'],
      ['P', '(P),'],
      ['V', '(V),'],
      ['T', '(T)'],
      ['n', '(n)'],
      ['R', 'ideal gas constant (R)']
    ],
    equation_gpt3: 'PV = nRT'
  },
  {
    sentence:
      'The Nernst equation, E = E0 - (RT/nF) * ln(Q), calculates the cell potential of an electrochemical cell under non-standard conditions, where E0 is the standard electrode potential, R is the gas constant, T is the temperature, n is the number of moles of electrons transferred, F is the Faraday constant, and Q is the reaction quotient.',
    words: ['E', '=', 'E0', '-', '(RT/nF)', '*', 'ln(Q),', 'non-standard', 'E0', 'R', 'T', 'n', 'F', 'Q'],
    gt: [
      ['E'],
      ['equals'],
      ['E zero', 'E0'],
      ['minus'],
      ['open bracket R T over n F close bracket', '(R T over n F)', '(RT/nF)', 'R T over n F'],
      ['times'],
      ['natural logarithm of Q', 'the natural log of Q', 'natural log of Q', 'the natural log of Q', 'the natural logarithm of Q', 'ln(Q),'],
      ['non-standard'],
      ['E zero', 'E0'],
      ['R'],
      ['T'],
      ['n'],
      ['F'],
      ['Q']
    ],
    equation_gpt3: 'E = E0 - (RT/nF) * ln(Q)'
  },
  {
    sentence: 'The Beer-Lambert Law, A = εlc, relates the absorbance (A) of a solution to the concentration (c) of the solute, the path length (l) of the cuvette, and the molar absorptivity (ε).',
    words: ['Beer-Lambert', 'A', '=', 'εlc,', '(A)', '(c)', '(l)', '(ε).'],
    gt: [['Beer-Lambert'], ['A'], ['equals'], ['epsilon el cee', 'epsilon times ell times c', 'epsilon ell c', 'εlc,', 'epsilon l c'], ['A', '(A)'], ['c', '(c)'], ['l', 'ell', '(l)'], ['epsilon']],
    equation_gpt3: 'A = εlc'
  },
  {
    sentence:
      'The Henderson-Hasselbalch equation, pH = pKa + log([A-]/[HA]), is used to estimate the pH of a buffer solution by relating the pKa of the acid to the ratio of the concentrations of its deprotonated ([A-]) and protonated ([HA]) forms.',
    words: ['Henderson-Hasselbalch', 'pH', '=', 'pKa', '+', 'log([A-]/[HA]),', 'pH', 'pKa', '([A-])', '([HA])'],
    gt: [
      ['Henderson-Hasselbalch'],
      ['p H', 'pH', 'pee H'],
      ['equals'],
      ['p K a', 'pKa', 'pee K a'],
      ['plus'],
      [
        'log of A minus over H A',
        'log of concentration of A minus divided by concentration of HA',
        'log of the concentration of A minus divided by the concentration of HA,',
        'log of the ratio of A minus to H A',
        'log of A minus over H A',
        'log([A-]/[HA]),'
      ],
      ['p H', 'pH'],
      ['p K a', 'P Ka', 'pKa'],
      ['A minus', '([A-])'],
      ['H A', 'HA', '([HA])']
    ],
    equation_gpt3: 'pH = pKa + log([A-]/[HA])'
  },
  {
    sentence:
      "Le Chatelier's principle quantitatively predicts how a change in conditions (concentration, temperature, or pressure) will shift the equilibrium position, formulated as a response to minimize the change imposed on the system.",
    words: [],
    gt: [],
    equation_gpt3: 'null'
  },
  {
    sentence:
      'The Gibbs free energy equation, ΔG = ΔH - TΔS, determines the spontaneity of a reaction, where ΔG is the change in free energy, ΔH is the change in enthalpy, T is the temperature in Kelvin, and ΔS is the change in entropy.',
    words: ['ΔG', '=', 'ΔH', '-', 'TΔS', 'ΔG', 'ΔH', 'T', 'ΔS'],
    gt: [['Delta G', 'ΔG'], ['equals'], ['Delta H', 'ΔH'], ['minus'], ['T Delta S,', 'TΔS,'], ['Delta G', 'ΔG'], ['Delta H', 'ΔH'], ['T'], ['Delta S', 'ΔS']],
    equation_gpt3: 'ΔG = ΔH - TΔS'
  },
  {
    sentence: 'The molarity of a solution is calculated using the formula M = moles of solute / liters of solution, which describes the concentration of solute in a solution.',
    words: ['of', 'solution', 'M', '=', 'moles', 'of', 'solute', '/', 'liters', 'of', 'solution,', 'of', 'solute', 'solution'],
    gt: [['of'], ['solution'], ['M'], ['equals', '='], ['moles'], ['of'], ['solute'], ['divided by'], ['liters'], ['of'], ['solution,'], ['of'], ['solute'], ['solution']],
    equation_gpt3: 'M = moles of solute / liters of solution'
  },
  {
    sentence:
      'The rate law for a chemical reaction, Rate = k[A]^x[B]^y, expresses the rate of the reaction as a function of the concentrations of the reactants ([A] and [B]) and their respective orders (x and y) in the reaction.',
    words: ['Rate', '=', 'k[A]^x[B]^y,', '([A]', '[B])'],
    gt: [
      ['Rate'],
      ['equals'],
      [
        'k times the concentration of A raised to the power of x times the concentration of B raised to the power of y',
        'k times [A] raised to the power of x times [B] raised to the power of y',
        'k times A to the power of x times B to the power of y',
        'k[A]^x[B]^y,'
      ],
      ['open square bracket A', 'A', 'the concentration of A'],
      ['open square bracket B', 'b', 'B', 'the concentration of B']
    ],
    equation_gpt3: 'Rate = k[A]^x[B]^y'
  },
  {
    sentence:
      'The partition coefficient (Kd) of a solute between two solvents is calculated as Kd = [solute]_solvent1 / [solute]_solvent2, where [solute]_solvent1 and [solute]_solvent2 are the concentrations of the solute in each solvent, respectively.',
    words: ['(Kd)', 'solute', 'Kd', '=', '[solute]_solvent1', '/', '[solute]_solvent2,', '[solute]_solvent1', '[solute]_solvent2', 'solute'],
    gt: [
      ['K d', 'K sub d', 'Kd'],
      ['solute'],
      ['K d', 'K sub d', 'Kd'],
      ['equals'],
      ['solute solvent one', 'concentration of solute in solvent 1', 'the concentration of the solute in solvent one', 'solute underscore solvent one'],
      ['divided by', 'over'],
      ['solute solvent two', 'concentration of solute in solvent 2', 'the concentration of the solute in solvent two,', 'solute underscore solvent two'],
      ['solute solvent one', 'concentration of solute in solvent 1', 'the concentration of the solute in solvent one', 'solute underscore solvent one', '[solute]_solvent1'],
      ['solute solvent two', 'concentration of solute in solvent 2', 'the concentration of the solute in solvent two', 'solute underscore solvent two', '[solute]_solvent2'],
      ['solute']
    ],
    equation_gpt3: 'Kd = [solute]_solvent1 / [solute]_solvent2'
  }
]
