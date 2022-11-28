export function arrayPair(
  arr: Array<number>,
  type: "odd" | "even"
): Array<number> {
  const isEven = type === "even";
  return arr.filter((_value, index) => {
    return index % 2 === (isEven ? 0 : 1);
  });
}
