/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object binding
        When `this` is used in the global scope, or has no object to point to, it will look to Window.
* 2. Implicit Binding
        When a function is called using dot notation, `this` points to the object to the left of the dot.
* 3. New Binding
        When `this` is used on a constructor function, it points to the specific instance of the object that is being created.
* 4. Explicit Binding
        Here we can tell `this` where to point using the `.call` or `.apply` Object methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window Binding
console.log(this);



// Principle 2
// Implicit Binding
const legolas = {
    name: 'Legolas',
    weapon: 'longbow',
    attack: function(enemy) {
        return `${this.name} attacked ${enemy} using their ${this.weapon}.`;
    },
}



console.log(legolas.attack('an orc'));

// Principle 3
// New Binding

function Character(attributes) {
    this.name = attributes.name;
    this.title = attributes.title;
    this.weapon = attributes.weapon;
    this.speak = function() {
        return `I am ${this.name}, ${this.title}.`
    }
}

const aragorn = new Character({
    name: 'Aragorn',
    title: 'King of Gondor and Arnor',
    weapon: 'sword',
})

console.log(aragorn.speak());



// Principle 4
// Explicit Binding

Character.prototype.attack = function(enemy) {
    return `${this.name} attacked ${enemy} using their ${this.weapon}.`
}

console.log(legolas.attack.call(aragorn, 'a troll'));