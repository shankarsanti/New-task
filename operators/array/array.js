let marks = [10,12,55,99,14,32,15,91,86];
let sum =0;

for (let valu of marks){
    valu += sum;
    average = valu/marks.length
}
console.log("average of marks",average);
console.log([marks]);




let iteams =[100,234,143,540,144,14]
let i = 0;


for(let value of iteams){
    console.log(`iteam of index ${i}=${value}`);
    let offer = value /  10;
    iteams[i] = iteams[i]-offer;
    console.log(`offer of the iteams = ${iteams[i]}`);
    i++;
}


let items =[100,234,143,540,144,14];

for(let i=0;i < items.length;i++){
    let offer = items[i] - 10;
    items[i]-=offer;
    
}
console,log(items);



let fooditem = [potato,banana,apple,orange];
fooditemitem.push("tamato.yellow");
console.log(fooditemitems.push);

fooditem.pop()
console.log(fooditem.pop);

let name = [ganesh,shankar,girimall,basu];
let name1=[ashif,paragouda];
let name2=[akshay];
console.log(name.concat(name1,name2));

console.log(name.unshift( royal));
console.log(name.shift());


console.log(name.tostring());


let arr=[1,2,3,4,5];

arr.slice();

//adda
arr.splice(2,0,101,102);

//delete
arr.splice(3,1);

//replace
arr.splice(4,1,143);