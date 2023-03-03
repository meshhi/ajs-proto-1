import Undead from '../Undead.js';

const undeadsTypes = [
    ['Gorn', 'Undead'],
    ['Diego', 'Undead'],
    ['Milten', 'Undead'],
]

test.each(undeadsTypes)('created undead with name %s', (name, type) => {
    const undead = new Undead(name);
    expect(undead.type).toBe(type);
})

const undeadsAttack = [
    ['Grisha', 25],
    ['Diego', 25]
]

test.each(undeadsAttack)('created undead with attack %s', (name, attack) => {
    const undead = new Undead(name);
    expect(undead.attack).toBe(attack);
})

const undeadsDef = [
    ['Grisha', 25],
    ['Diego', 25]
]

test.each(undeadsDef)('created undead with defense %s', (name, def) => {
    const undead = new Undead(name);
    expect(undead.defense).toBe(def);
})

const undeadsLvl = [
    ['Grisha', 1],
    ['Diego', 1]
]

test.each(undeadsLvl)('created undead with level %s', (name, lvl) => {
    const undead = new Undead(name);
    expect(undead.level).toBe(lvl);
})

const undeadsLvlUp = [
    ['Grisha', 1, 25, 100],
    ['Diego', 1, 25, 100]
]

test.each(undeadsLvlUp)('undead %s leveled up', (name, lvl, attack, health) => {
    const undead = new Undead(name);
    undead.levelUp()
    expect(undead.level).toBe(lvl + 1);
    expect(undead.health).toBe(health);
    expect(undead.attack).toBe(attack * 1.2);
})

const undeadsDamaged = [
    ['Grisha', 20],
    ['Diego', 10]
]

test.each(undeadsDamaged)('undead %s demaged by %s points', (name, damage) => {
    const undead = new Undead(name);
    undead.damage(damage);
    const expectedDamage = damage * (1 - undead.defence / 100);
    expect(undead.health).toBe(100 - expectedDamage);
})