//Exercise 1
const myName = 'Yiming';
const age = 30;
const isStudent = true;
console.log (myName, age, isStudent)

//Exercise 3

function checkAge() {
    if (age>=18) {
        console.log('Adult');
    }
    else {
        console.log('Minor');
    }
}

checkAge(age)

//Execrise 4

for(let i = 1; i < 11; i = i + 1) {
    console.log(i)
} 

let i = 1;
while (i<11) {
    console.log(i);
    i = i + 1;
}

//Exercise 5
function add(x,y) {
    const sum = x + y;
    return sum;
}

let name = "ABC"
function greet() {
    console.log('Hello' + name + "!");
}
 greet();




