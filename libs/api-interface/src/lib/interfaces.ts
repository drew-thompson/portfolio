export interface Message {
  message: string;
}

export const person = {
  name: 'John Snow',
  age: 26
};

export type Person = typeof person;
export type PersonKeys = keyof Person;
export type PersonTypes = Person[PersonKeys];
