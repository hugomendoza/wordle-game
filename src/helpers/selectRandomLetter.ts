import data from "../db-words/words.txt"

export const selectRandomLetter = async (): Promise<string> => {
  const response = await fetch(data);
  const text = await response.text();
  const words = text.split(/\s+/);
  const selectWithFiveLetters = words.filter((word) => word.length === 5);
  const removeAccents = selectWithFiveLetters.map((word) => word.normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
  const randomWord = removeAccents[Math.floor(Math.random() * selectWithFiveLetters.length)];
  return randomWord;
};