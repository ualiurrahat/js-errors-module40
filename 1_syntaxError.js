function isBigger(n)
{
    if(n < 25)
    {
        return "bigger than 25";
    }
    else
    {
        return "less than 25";
    }
}
// }  syntax error: unexpected token

// console.log(isBigger(35));

// const sum = a,b =>a+b;  syntax error: missing  initializer
const sum = (a,b) => a+b;
// console.log(sum(2,3));


const rahat = {
    name : "rahat",
    age:22,
    // age: 22 (comma missing.......syntax error: unexpected identifier)
    job:"developer"
};
console.log(rahat);

// const numbers = [12,3,4, 10 5]

// for(int i = 1; i < 10 i++)
//{const num = numbers[i;}

// if(numbers.length > 5) && (numbers[0] === 0) ......all condition inside if will be inside a bracket
// right way : if((numbers.length > 5) && (numbers[0] === 0) )