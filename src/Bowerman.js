import Character from './Character';

class Bowerman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defense = 25;
  }
}

export default Bowerman;
