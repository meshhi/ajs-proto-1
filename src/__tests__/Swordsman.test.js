import Swordsman from '../Swordsman.js';

const swordsmansTypes = [
    ['Gorn', 'Swordsman'],
    ['Diego', 'Swordsman'],
    ['Milten', 'Swordsman'],
]

test.each(swordsmansTypes)('created swordsman with name %s', (name, type) => {
    const swordsman = new Swordsman(name);
    expect(swordsman.type).toBe(type);
})

const swordsmansAttack = [
    ['Grisha', 40],
    ['Diego', 40]
]

test.each(swordsmansAttack)('created swordsman with attack %s', (name, attack) => {
    const swordsman = new Swordsman(name);
    expect(swordsman.attack).toBe(attack);
})

const swordsmansDef = [
    ['Grisha', 10],
    ['Diego', 10]
]

test.each(swordsmansDef)('created swordsman with defense %s', (name, def) => {
    const swordsman = new Swordsman(name);
    expect(swordsman.defense).toBe(def);
})

const swordsmansLvl = [
    ['Grisha', 1],
    ['Diego', 1]
]

test.each(swordsmansLvl)('created swordsman with level %s', (name, lvl) => {
    const swordsman = new Swordsman(name);
    expect(swordsman.level).toBe(lvl);
})

const swordsmansLvlUp = [
    ['Grisha', 1, 40, 100],
    ['Diego', 1, 40, 100]
]

test.each(swordsmansLvlUp)('swordsman %s leveled up', (name, lvl, attack, health) => {
    const swordsman = new Swordsman(name);
    swordsman.levelUp()
    expect(swordsman.level).toBe(lvl + 1);
    expect(swordsman.health).toBe(health);
    expect(swordsman.attack).toBe(attack * 1.2);
})

const swordsmansDamaged = [
    ['Grisha', 20],
    ['Diego', 40]
]

test.each(swordsmansDamaged)('swordsman %s demaged by %s points', (name, damage) => {
    const swordsman = new Swordsman(name);
    swordsman.damage(damage);
    const expectedDamage = damage * (1 - swordsman.defence / 100);
    expect(swordsman.health).toBe(100 - expectedDamage);
})