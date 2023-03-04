import Daemon from '../Daemon';

const daemonsTypes = [
  ['Gorn', 'Daemon'],
  ['Diego', 'Daemon'],
  ['Milten', 'Daemon'],
];

test.each(daemonsTypes)('created daemon with name %s', (name, type) => {
  const daemon = new Daemon(name);
  expect(daemon.type).toBe(type);
});

const daemonsAttack = [
  ['Grisha', 10],
  ['Diego', 10],
];

test.each(daemonsAttack)('created daemon with attack %s', (name, attack) => {
  const daemon = new Daemon(name);
  expect(daemon.attack).toBe(attack);
});

const daemonsDef = [
  ['Grisha', 40],
  ['Diego', 40],
];

test.each(daemonsDef)('created daemon with defense %s', (name, def) => {
  const daemon = new Daemon(name);
  expect(daemon.defense).toBe(def);
});

const daemonsLvl = [
  ['Grisha', 1],
  ['Diego', 1],
];

test.each(daemonsLvl)('created daemon with level %s', (name, lvl) => {
  const daemon = new Daemon(name);
  expect(daemon.level).toBe(lvl);
});

const daemonsLvlUp = [
  ['Grisha', 1, 10, 100],
  ['Diego', 1, 10, 100],
];

test.each(daemonsLvlUp)('daemon %s leveled up', (name, lvl, attack, health) => {
  const daemon = new Daemon(name);
  daemon.levelUp();
  expect(daemon.level).toBe(lvl + 1);
  expect(daemon.health).toBe(health);
  expect(daemon.attack).toBe(attack * 1.2);
});

const daemonsDamaged = [
  ['Grisha', 20],
  ['Diego', 40],
];

test.each(daemonsDamaged)('daemon %s demaged by %s points', (name, damage) => {
  const daemon = new Daemon(name);
  daemon.damage(damage);
  const expectedDamage = damage * (1 - daemon.defence / 100);
  expect(daemon.health).toBe(100 - expectedDamage);
});
