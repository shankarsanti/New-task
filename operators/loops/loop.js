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
    console.log("key",key, person[key]);
}   


