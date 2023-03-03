import Character from "./Character.js";

class Daemon extends Character {
    constructor(name) {
        super(name);
        this.type = 'Daemon';
        this.attack = 10;
        this.defense = 40;
    }
}

export default Daemon;