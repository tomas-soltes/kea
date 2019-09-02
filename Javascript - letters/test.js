let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(letters[4]);

let newarr = letters;
newarr[4] = '*';

console.log(letters[4]);

let people = ["Harry", "Ron", "Hermione"];

people.push("Draco"); //["Harry", "Ron", "Hermione" ,"Draco"]
people.pop(); //["Harry", "Ron", "Hermione"]
people.push("Neville"); //["Harry", "Ron", "Hermione" ,"Neville"]
people.push("Luna"); //["Harry", "Ron", "Hermione" ,"Neville", "Luna"]
people = people.slice(0, 3); //["Harry", "Ron", "Hermione"]
people.splice(1, 0, "Cho"); //["Harry","Cho", "Ron", "Hermione"]
people[2] = "Ginny"; //["Harry","Cho", "Ginny", "Hermione"]
people.push("Fred", "George"); //["Harry","Cho", "Ginny", "Hermione" ,"Fred" , "George"]
const position = people.indexOf("Fred"); //4
people.splice(position, 1); ////["Harry","Cho", "Ginny", "Hermione", "George"]

console.log(people);

let i = 0;
let counter = 0;
let numbers = [];

addNumber();

function addNumber() {
    if (counter < 10){
counter++;
    }
    if (i > 9) {
        numbers.shift();
        }
 
    numbers.push(i);
    console.log(counter);
    console.log(numbers);
    i++;
    setTimeout(addNumber, 1000);

}