// Soldier
class Soldier {
    constructor(health, strength) {
      this.health = health,
      this.strength = strength
    }

    attack = () => {
        return this.strength
    }

    receiveDamage = (damage) => {
        this.health -= damage 
    }
    
}

let soldier1 = new Soldier(3, 3)
console.log(soldier1)


// Viking
class Viking extends Soldier {
   constructor(name, health, strength) {
    super(health, strength)
    this.name = name 
   }

    receiveDamage = (damage) => {
        this.health -= damage
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else if (this.health = damage) {
      return `${this.name} has died in act of combat`
    }
    }

    battleCry = () => {
        return "Odin Owns You All!"
      }
}

// Saxon
class Saxon extends Soldier {

    receiveDamage = (damage) => {
        this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else if (this.health = damage) {
      return `A Saxon has died in combat`
    }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking = (Viking) => {
        this.vikingArmy.push(Viking)
    }

    addSaxon = (Saxon) => {
        this.saxonArmy.push(Saxon)
    }

    vikingAttack = () => {
        let fightSaxon = Saxon.length;
        let randomSaxon = Math.random() * fightSaxon;
        let randomSaxonFighter = Math.floor( randomSaxon);
        saxonArmy.receiveDamage() = Viking.strength;
        this.saxonArmy.pop(Saxon)

    }
}
