let prabinMass = 86;
let ramMass = 70;

let prabinHeight = 150;
let ramHeight = 142;

let prabinsBMI = prabinMass / (prabinHeight * prabinHeight)
let ramBMI = ramMass / (ramMass * ramMass)

let prabinHigherBMi = prabinsBMI > ramBMI;

console.log(`The BMI of prabin is ${prabinsBMI}.`);
console.log(`The BMI of ram is ${ramBMI}.`);

switch (prabinHigherBMi) {
    case true:
        console.log(`Prabin has higher BMI than ram.`);
        break;
    case false:
        console.log(`Ram has higher BMI than prabin.`);
        break;
}