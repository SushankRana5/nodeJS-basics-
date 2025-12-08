console.log("1");
setTimeout(() => console.log("5"), 1000);
Promise.resolve().then(() => console.log("2"));

console.log("3");

console.log("4");



console.log("6");