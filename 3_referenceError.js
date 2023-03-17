const a = 20;
// console.log(b);
// reference Error: b is not defined

// console.log(name);
// reference error: can not access 'name' before initialization
let name = "rahat";

console.log(add(2,3));
function add(a,b)
{
    return a+b;
}
// console.log(add2(10,20));
// reference error : can not access 'add2' before initialization
const add2 = (a,b) =>a+b;