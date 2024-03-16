export default function useGetInitials(inputString: string): string {
  const words: string[] = inputString.split(' ');
  const capitalizedWords: string[] = words.map((word) => word.slice(0, 1).toUpperCase());
  return capitalizedWords.join('');
}
