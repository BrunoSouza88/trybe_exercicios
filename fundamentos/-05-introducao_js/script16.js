const a = 2;
const b = 13;
const c = 2;

const a2 = (a % 2 != 0);
const b2 = (b % 2 != 0);
const c2 = (c % 2 != 0);

if(a2 || b2 || c2 ) {
  console.log ("True")
} else {
  console.log ("False!")
}