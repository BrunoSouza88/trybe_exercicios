const a = 10;
const b = 2;
const c = 8;

if (a > b && a > c) {
  console.log ("O maior número entre eles é :" + a);
} else if (b > a && b > c) {
    console.log ("O maior número entre eles é :" + b);
} else if (c > b && c > a) {
    console.log ("O maior número entre eles é :" + c);
} else {
    console.log ("Ninguém é de ninguém!")
}