import Character from './Character';

class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defense = 10;
  }
}

export default Zombie;
