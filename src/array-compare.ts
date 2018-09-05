export interface ArrayCompareResult<T> {
  equal: boolean;
  a: T;
  b: T;
}

export const arrayCompare: <T>(
  aArray: T[],
  bArray: T[],
) => ArrayCompareResult<T>[] = <T>(aArray: T[], bArray: T[]) => {
  const maxLength = Math.max(aArray.length, bArray.length);
  const result = [] as ArrayCompareResult<T>[];

  let i = 0;
  while (i < maxLength) {
    const a = aArray[i];
    const b = bArray[i];
    result.push({equal: a === b, a, b});
    i++;
  }

  return result;
};
