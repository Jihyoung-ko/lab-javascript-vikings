// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }  
}


// Viking
class Viking extends Soldier{
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    } else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    } else {
      return `A Saxon has died in combat`
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let attackedSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    let attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    
    let attackResult = attackedSaxon.receiveDamage(attackingViking.strength);
    
    let tempSaxonArmy = [...this.saxonArmy];

    let newSaxonArmy = tempSaxonArmy.filter(saxon => {
      if(saxon.health > 0){
        return saxon;
      }
    });

    this.saxonArmy = newSaxonArmy;
    
    return attackResult
  }

  saxonAttack(){
    let attackedViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
    let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];

    let attackResult = attackedViking.receiveDamage(attackingSaxon.strength);
    
    let tempVikingArmy = [...this.vikingArmy];

    let newVikingArmy = tempVikingArmy.filter(viking => {
      if(viking.health > 0){
        return viking;
      }
    });

    this.vikingArmy = newVikingArmy;
    
    return attackResult;
  }

  showStatus(){
    if(this.saxonArmy.length === 0 && this.vikingArmy.length > 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0 && this.saxonArmy.length > 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


