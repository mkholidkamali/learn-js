
// Create
let person = {}

Reflect.set(person, "firstname", 'Kholid');
Reflect.set(person, "lastname", 'Kamali');

console.log(person);
console.log(Reflect.get(person, 'firstname'));
console.log(Reflect.has(person, 'firstname'));