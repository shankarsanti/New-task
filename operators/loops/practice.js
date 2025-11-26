// practice 1
for(num = 0; num <= 100; num++){
    if (num %2===0){
    console.log("num", num);
    }
}
console.log("the total even numbers", num);

let numbers;
for (num =0; num <= 100; num++){
    if (num %2 !==0){
        console.log("num", num);
    }  
    totalnumber= numbers + num;
}console.log("the total odd numbers", numbers);




// practice 2
let gamenumber = 14;
let usernumber = prompt("enter your numbers ,to gess the game number");


while (usernumber != gamenumber){
    usernumber = prompt ("wrong gess , please try again");
}
 console.log("congratulation! you gess the right number");
 console.log ("thank you ");