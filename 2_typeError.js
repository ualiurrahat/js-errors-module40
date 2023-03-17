const number = 25;
// number.push(45); typerror

let student;
// console.log(student.cgpa); 
// typeerror: can not read properties of undefined (reading 'cgpa')
// since student is undefined, this message is shown.

let member = {};
// console.log(member.name);
// this does not show error. this show undefined.


// use optional chaining if there is chance of getting undefined value
let minul = {job : "cr", age : 23, love : "big cat"};
// console.log(minul.hobby.fantasy);
// this give : can not read properties of undefined(reading 'fantasy')
// here, minul.hobby gives undefined.(since hobby is not defined)
// so, code says, it can not read undefined(reading 'fantasy') as minul.hobby = undefined

// solution: use optional chaining
console.log(minul?.hobby?.fantasy);
// prints undefined as minul.hobby = undefined,
// it stops finding fantasy

const a = 2;
// a = 5; typeError: assignment to constant variable