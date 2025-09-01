const names = ['alice', 'bob', 'carol'];

const capitalizedNames = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));

console.log('Original Names:', names);
console.log('Capitalized Names:', capitalizedNames);
