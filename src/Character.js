class Character {
  constructor(name) {
    if ((name.length >= 2) && (name.length <= 10)) {
      this.name = name;
    } else {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export default Character;
