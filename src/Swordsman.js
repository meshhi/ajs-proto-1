import Character from './Character';

class Swordsman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defense = 10;
  }
}

export default Swordsman;
