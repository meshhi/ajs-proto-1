import Magician from '../Magician';

const magiciansTypes = [
  ['Gorn', 'Magician'],
  ['Diego', 'Magician'],
  ['Milten', 'Magician'],
];

test.each(magiciansTypes)('created magician with name %s', (name, type) => {
  const magician = new Magician(name);
  expect(magician.type).toBe(type);
});

const magiciansAttack = [
  ['Grisha', 10],
  ['Diego', 10],
];

test.each(magiciansAttack)('created magician with attack %s', (name, attack) => {
  const magician = new Magician(name);
  expect(magician.attack).toBe(attack);
});

const magiciansDef = [
  ['Grisha', 40],
  ['Diego', 40],
];

test.each(magiciansDef)('created magician with defense %s', (name, def) => {
  const magician = new Magician(name);
  expect(magician.defense).toBe(def);
});

const magiciansLvl = [
  ['Grisha', 1],
  ['Diego', 1],
];

test.each(magiciansLvl)('created magician with level %s', (name, lvl) => {
  const magician = new Magician(name);
  expect(magician.level).toBe(lvl);
});

const magiciansLvlUp = [
  ['Grisha', 1, 10, 100],
  ['Diego', 1, 10, 100],
];

test.each(magiciansLvlUp)('magician %s leveled up', (name, lvl, attack, health) => {
  const magician = new Magician(name);
  magician.levelUp();
  expect(magician.level).toBe(lvl + 1);
  expect(magician.health).toBe(health);
  expect(magician.attack).toBe(attack * 1.2);
});

const magiciansDamaged = [
  ['Grisha', 20],
  ['Diego', 40],
];

test.each(magiciansDamaged)('magician %s demaged by %s points', (name, damage) => {
  const magician = new Magician(name);
  magician.damage(damage);
  const expectedDamage = damage * (1 - magician.defence / 100);
  expect(magician.health).toBe(100 - expectedDamage);
});
