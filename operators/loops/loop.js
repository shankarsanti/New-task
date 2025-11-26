let num =10;
for (i=0; i<= num; i++){ 
    console.log("i",i);
}


let ages = [20, 30, 25, 35];
num = 0;
number = 0;
for ( let age of ages ){
    console.log("age",age);
    num = ++num;
    number = num + age++;
}

console.log("the number of ages", num,number);


let person = {
    name: "John",
    age: 30,
    city: "New York"
};  for ( let key in person ){
    console.log(key, person[key]);
}   



let student = {
    name: "Alice",
    age: 22,
    major: "Computer Science"
};
 for ( let key in student ){
    console.log(key, student[key]);
}


let fruits = ["apple", "banana", "cherry"];
for ( let fruit of fruits ){
    console.log("fruit", fruit);
}

let total = 0;
let prices = [10, 20, 15, 25];
for ( let price of prices ){
    total += price;
}
console.log("total price", total);


let boys = {
    name: "Bob",
    age: 24,
    city: "Los Angeles"
};
 for ( let key in boys ){
    console.log(key,boys[key]);
}
for ( let key of boys) {
    console.log(key);
}