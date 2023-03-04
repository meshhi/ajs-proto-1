import Character from './Character';

class Magician extends Character {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 10;
    this.defense = 40;
  }
}

export default Magician;
