// Check if string is empty or contains whitespaces
export const isEmptyOrSpaces = (word: string) => {
  return /^\s*$/.test(word);
}