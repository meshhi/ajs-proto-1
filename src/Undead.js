import Character from "./Character.js";

class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'Undead';
        this.attack = 25;
        this.defense = 25;
    }
}

export default Undead;