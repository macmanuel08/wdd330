function test() {
    return null;
}

let array = [];

console.log(typeof(test()));
console.log(typeof(array));

const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman['fly']());

const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
console.log(hulk);
console.log(hulk['catchPhrase']);
console.log(hulk.catchPhrase);

 // to check for its own prperties and log them on the console: not including inherited properties
for(const key in superman) {
    if (superman.hasOwnProperty(key)) {
        console.log(key + ": " + superman[key]);
    }
}