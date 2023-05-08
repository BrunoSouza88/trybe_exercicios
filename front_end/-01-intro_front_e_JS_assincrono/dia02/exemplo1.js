console.log("Log 1");

setTimeout(() => console.log("Async log"), 1000);
setTimeout(() => console.log(10 * 10), 10000)

console.log("Log 2");
console.log("Log 3");