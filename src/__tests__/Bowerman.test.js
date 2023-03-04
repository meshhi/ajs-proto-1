import Bowerman from '../Bowerman';

const bowersTypes = [
  ['Gorn', 'Bowman'],
  ['Diego', 'Bowman'],
  ['Milten', 'Bowman'],
];

test.each(bowersTypes)('created bowman with name %s', (name, type) => {
  const bowerman = new Bowerman(name);
  expect(bowerman.type).toBe(type);
});

const bowersAttack = [
  ['Grisha', 25],
  ['Diego', 25],
];

test.each(bowersAttack)('created bowman with attack %s', (name, attack) => {
  const bowerman = new Bowerman(name);
  expect(bowerman.attack).toBe(attack);
});

const bowersDef = [
  ['Grisha', 25],
  ['Diego', 25],
];

test.each(bowersDef)('created bowman with defense %s', (name, def) => {
  const bowerman = new Bowerman(name);
  expect(bowerman.defense).toBe(def);
});

const bowersLvl = [
  ['Grisha', 1],
  ['Diego', 1],
];

test.each(bowersLvl)('created bowman with level %s', (name, lvl) => {
  const bowerman = new Bowerman(name);
  expect(bowerman.level).toBe(lvl);
});

const bowersLvlUp = [
  ['Grisha', 1, 25, 100],
  ['Diego', 1, 25, 100],
];

test.each(bowersLvlUp)('bowman %s leveled up', (name, lvl, attack, health) => {
  const bowerman = new Bowerman(name);
  bowerman.levelUp();
  expect(bowerman.level).toBe(lvl + 1);
  expect(bowerman.health).toBe(health);
  expect(bowerman.attack).toBe(attack * 1.2);
});

const bowersDamaged = [
  ['Grisha', 20],
  ['Diego', 40],
];

test.each(bowersDamaged)('bowman %s demaged by %s points', (name, damage) => {
  const bowerman = new Bowerman(name);
  bowerman.damage(damage);
  const expectedDamage = damage * (1 - bowerman.defence / 100);
  expect(bowerman.health).toBe(100 - expectedDamage);
});
