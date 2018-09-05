export interface ArrayCompareResult<T> {
    equal: boolean;
    a: T;
    b: T;
}
export declare const arrayCompare: <T>(aArray: T[], bArray: T[]) => ArrayCompareResult<T>[];
