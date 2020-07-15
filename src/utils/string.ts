export const getCountLabel = (count: number, main: string, ends: string[]) => {
  const n = Math.abs(count) % 100;
  const ab = count % 10;
  if (n > 10 && n < 20) return `${main}${ends[1]}`;
  if (ab > 1 && ab < 5) return `${main}${ends[2]}`;
  if (ab === 1) return `${main}${ends[0]}`;
  return `${main}${ends[1]}`;
};
