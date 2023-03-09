import Character from '../Character';
import Bowerman from '../Bowerman'

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

test('level up', () => {
  const person = new Character('Grisha');
  person.attack = 100;
  person.defense = 100;
  person.levelUp();

  const result = {
    attack: 120, defense: 120, health: 100, level: 2, name: 'Grisha',
  };

  expect(person).toEqual(result);
})

test('error level up', () => {
  const person = new Character('Grisha');
  person.health = 0;

  expect(() => person.levelUp()).toThrow(new Error('Нельзя повысить левел умершего'));
})

test('success damage ', () => {
  const person = new Character('Grisha');

  const damage = 100;
  person.defence = 100;

  const expectedDamage = damage * (1 - person.defence / 100);

  person.health = 100;
  person.damage(damage);

  expect(person.health).toBe(100 - expectedDamage);
})

test('error damage ', () => {
  const person = new Character('Grisha');
  person.health = 0;

  expect(() => person.damage(1)).toThrow(new Error('Персонаж уже все...'));
})
