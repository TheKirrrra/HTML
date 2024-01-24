function greetingGermanNorth(firstName, lastName) {
    return "Moin, " + firstName + " " + lastName + "!";
}


function greetingGermanSouth(firstName, lastName) {
    return "Servus, " + firstName + " " + lastName + "!";
}


function greetingUniversal(firstName, lastName, greetingFunction) {
    return greetingFunction(firstName, lastName);
}

const northGreeting = greetingUniversal("John", "Snow", greetingGermanNorth);
const southGreeting = greetingUniversal("Peter", "Parker", greetingGermanSouth);

console.log(northGreeting); 
console.log(southGreeting); 



const [first,second] = printArray;
console.log(`${array[0]} - я сначала, ${array[1]} после меня`);