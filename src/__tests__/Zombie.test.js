import Zombie from '../Zombie.js';

const zombiesTypes = [
    ['Gorn', 'Zombie'],
    ['Diego', 'Zombie'],
    ['Milten', 'Zombie'],
]

test.each(zombiesTypes)('created zombie with name %s', (name, type) => {
    const zombie = new Zombie(name);
    expect(zombie.type).toBe(type);
})

const zombiesAttack = [
    ['Grisha', 40],
    ['Diego', 40]
]

test.each(zombiesAttack)('created zombie with attack %s', (name, attack) => {
    const zombie = new Zombie(name);
    expect(zombie.attack).toBe(attack);
})

const zombiesDef = [
    ['Grisha', 10],
    ['Diego', 10]
]

test.each(zombiesDef)('created zombie with defense %s', (name, def) => {
    const zombie = new Zombie(name);
    expect(zombie.defense).toBe(def);
})

const zombiesLvl = [
    ['Grisha', 1],
    ['Diego', 1]
]

test.each(zombiesLvl)('created zombie with level %s', (name, lvl) => {
    const zombie = new Zombie(name);
    expect(zombie.level).toBe(lvl);
})

const zombiesLvlUp = [
    ['Grisha', 1, 40, 100],
    ['Diego', 1, 40, 100]
]

test.each(zombiesLvlUp)('zombie %s leveled up', (name, lvl, attack, health) => {
    const zombie = new Zombie(name);
    zombie.levelUp()
    expect(zombie.level).toBe(lvl + 1);
    expect(zombie.health).toBe(health);
    expect(zombie.attack).toBe(attack * 1.2);
})

const zombiesDamaged = [
    ['Grisha', 20],
    ['Diego', 10]
]

test.each(zombiesDamaged)('zombie %s demaged by %s points', (name, damage) => {
    const zombie = new Zombie(name);
    zombie.damage(damage);
    const expectedDamage = damage * (1 - zombie.defence / 100);
    expect(zombie.health).toBe(100 - expectedDamage);
})