export interface Error {
  Error: string;
  Response: string;
}

export function isError(obj: any): obj is Error {
  return typeof obj?.Error === "string";
}
