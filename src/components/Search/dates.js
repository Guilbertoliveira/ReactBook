const frases = [
  'Descubra mundos em páginas.',
  'Aventura entre linhas.',
  'Leia, explore, sonhe.',
  'Livros são portais.',
  'Palavras, viagens, encantos.',
  'Embarque na leitura.',
  'Viaje sem sair do lugar.',
  'Explore a imaginação.',
  'Livros, tesouros literários.',
  'Páginas cheias de vida.',
];

export function randomPhrases() {
  const randomIndex = Math.floor(Math.random() * frases.length);
  return frases[randomIndex];
}
