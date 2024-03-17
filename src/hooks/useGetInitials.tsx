export default function useGetInitials(userName: string | undefined): string | undefined {
  if (userName) {
    const words: string[] = userName.split(' ');
    const capitalizedWords: string[] = words.map((word) => word.slice(0, 1).toUpperCase());
    return capitalizedWords.join('');
  }
}
