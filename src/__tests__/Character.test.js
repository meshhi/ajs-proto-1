import Character from '../Character';

const validNames = [
  'Grisha',
  'Diego',
];

test.each(validNames)('valid name %s, created character', (name) => {
  const baseCharacter = new Character(name);
  expect(baseCharacter).toBeInstanceOf(Character);
});

const invalidNames = [
  'Q',
  'QwertyQwerty',
];

test.each(invalidNames)('invalid name %s should throw error', (name) => {
  const promis = new Promise((resolve) => {
    const character = new Character(name);
    resolve(character);
  });
  expect(promis).rejects.toThrow();
});
