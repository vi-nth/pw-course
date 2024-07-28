// CRUB
console.log(Object.entries({ name: 'teo', age: 18 }));

const myMap = new Map([
    ['name', 'teo'],
    ['age', 18],
    ['title', 'student']
]);
console.log(myMap);

// Read a single value from entry
console.log(myMap.get('age'));

// Check if a key is existing
console.log(myMap.has('age'));

console.log("===Loop the map's entries vid keys===");

for (const key of myMap.keys()) {
    console.log(`${key}:${myMap.get(key)}`);
}

console.log("===Loop the map's entries vid values===");

for (const value of myMap.values()) {
    console.log(`Value:${value}`);
}

console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));

// Update ->set
myMap.set('name', 'Tun');
console.log(myMap);

// Delete
console.log(`Size before: ${myMap.size}`);
myMap.delete('name');
console.log(myMap);
console.log(`Size after: ${myMap.size}`);

