let sentences = [
  '🤖 Ce film est nul',
  '🤖 Ce film est un gros film de merde',
  '🤖 Ce film est une daube',
  '🤖 Ce film est un navet',
  '🤖 Ce film est une merde',
  '🤖 Ce film est une bouse',
  '🤖 Ce film est une catastrophe',
  '🤖 Ce film est une calamité',
  '🤖 Ce film est une horreur',
  '🤖 Ce film est une infamie',
  '🤖 Ce film est une ignominie',
  '🤖 Ce film est une abomination',
  '🤖 Ce film est une atrocité',
  '🤖 Ce film est une monstruosité',
  '🤖 Ce film est une honte',
  '🤖 Ce film est une insulte',
  '🤖 Ce film est une offense',
  '🤖 Ce film est une injure',
  "🤖 Ce film est une insulte à l'intelligence",
  '🤖 Ce film est une chiasse sans nom',
  '🤖 Ce film est une chiasse',
  '🤖 Ce film me donne envie de gerber',
  "🤖 Ce film n'est pas bon",
  "🤖 Ce film n'est pas terrible",
  "🤖 Ce film n'est pas fameux",
  "🤖 Ce film n'a pas de qualité",
  "🤖 Ce film n'a pas de mérite",
  "🤖 Ce film n'a pas de valeur",
  "🤖 Ce film n'a rien pour lui",
  "🤖 Ce film n'a rien pour plaire",
  "🤖 Ce film n'a rien pour séduire",
  "🤖 Ce film n'a rien pour attirer",
  "🤖 Ce film n'a rien révolutionné",
  "🤖 Ce film n'a rien inventé",
  "🤖 Je n'ai pas les mots pour qualifier cette merde",
  "🤖 Plutôt tremper mon electro-penis dans de l'harrissa que de voir ça",
  "🤖 C'est un NON !",
];

const randomRefused = () => {
  const random = sentences[Math.floor(Math.random() * sentences.length)];
  return random;
};

module.exports = { randomRefused };
