let key=prompt("Enter the key to store data:");
let value=prompt("Enter the value to store data:");
localStorage.setItem(key, value);
console.log(`Data stored: { ${key}: localstorage.getitem${value} }`);
