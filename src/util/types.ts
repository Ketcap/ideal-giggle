export type KeyGenerator<T extends string[], valueType extends any> = {
  [key in T[number]]: valueType;
};

export interface Dictionary<T> {
  [Key: string]: T;
}