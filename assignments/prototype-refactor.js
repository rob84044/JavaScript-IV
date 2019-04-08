/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject{
  constructor (args){
    this.createdAt = args.createdAt;
    this.name = args.name;
    this.dimensions = args.dimensions;
  }
  destroy(){
    return ` ${this.name} was removed from the game.`;
  }
}


/*
  === CharacterStats ===
  
*/

class CharacterStats extends GameObject{
  constructor (args){
    super(args);
    this.healthPoints = args.healthPoints;
  }
  takeDamage () {
    return `${this.name} took damage.`
  }
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  
*/
 
class Humanoid extends CharacterStats{
  constructor (args){
    super(args);
    this.team = args.team;
    this.weapons = args.weapons;
    this.language = args.language;
    
  }
  greet (){
    return `${this.name} offers a greeting in ${this.language}`
  }
}

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.