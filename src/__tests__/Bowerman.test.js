import Bowerman from '../Bowerman.js';

const bowersTypes = [
    ['Gorn', 'Bowman'],
    ['Diego', 'Bowman'],
    ['Milten', 'Bowman'],
]

test.each(bowersTypes)('created bowman with name %s', (name, type) => {
    const bowerman = new Bowerman(name);
    expect(bowerman.type).toBe('Bowman');
})

// const bowersAttack = [
//     ['Grisha', 'Bowman', 25, 25, 1],
//     ['Diego', 'Bowman', 25, 25, 1]
// ]