alert("wrong file loaded");
alert("not used this file");




let name = prompt("Enter your name:");
if (name){
        confirm("are you sure?");
}else{
    alert("thank you for wisiting");
}




alert("Hello, " + name + "! Welcome to our website.");



let proceed = confirm("Do you want to continue?");
if (proceed) {
    alert("Great! Let's continue.");
} else {
    alert("Thank you for visiting. Goodbye!");
}       
console.log("Popup operations completed.");







let num = prompt("Enter a number to check if it's even or odd:");
if (num){
    confirm (" You entered " + num + ". Is that correct? ");}
    else{
        alert("No number entered.");
    }
    
let check;
if (num % 2 === 0) {
    check = num + " is an Even number.";     
} else {
    check = num + " is an Odd number.";   
}
console.log(check);

