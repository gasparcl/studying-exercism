export function isPangram(text: string): boolean {
  const lowerText = text.trim().toLowerCase();
  const regex = /[a-z]/g;
  const matchChars = lowerText.match(regex);
  const noDuplicatesResults = new Set(matchChars);
  const isPangram = noDuplicatesResults.size === 26;

  return isPangram;
}
