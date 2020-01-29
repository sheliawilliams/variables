var foo ="hello world";

console.log(foo);
var bass = "fish";
console.log(bass);
var payrate =18;
var payPerWeek = payrate * 40;
var payPerMonth = payPerWeek * 4;
var payPerYear = payPerMonth * 12;
console.log(payrate, payPerYear); 
console.log('here');

//Data Types

var string = 'hello';

var anotherstring = "world";
var yetanotherstring ='0';
var interger = 2;
var anotherInt = 3.4;
var broken = 'you can=\'t do this';
var fix1 = "you can't do this";
var bool =false;
var bool12 = true;
bool12 = false;
console.log(bool12);

// BOOLEAN

var temp = 1;
temp = 2;
temp = temp  + 2; // 4
temp = temp -1; // 3
console.log(temp); // 3

var concat = 'hello' + ' world ';
console.log(concat);

var result = '2' + 3;
console.log(result); // string: (23)
var result2 = '2' * 3;
console.log(result2);

let baz = 'hola mundo'
console.log(baz);
const boo = 'pizza';
console.log(boo);

var cow;
console.log(cow);
cow = 'mooo';
console.log(cow); // string 'mooo'

// console.log(chicken); // not defined
var foo2 = 0;
// foo2 = foo2 + 1
foo2++; 
foo2++;
foo2--;
console.log(foo2); // ?????
console.log(++foo2);
// increment ++
// decrement --
var baz5, baz6, baz7;
var baz8, baz12= 50, baz9 = 10;
// Don't use a reserved keyword ie break,boolean

//Can't start with a number ie var 9Lives
// Variables are case sensitive ie FOO !== foo
// You cant start with an underscore. most use an underscore to
// indicate a private variable

var _DONOTCHANGEME = 0;

// PTO V1: A simple program that calculates the PTO(Paid time off) fixed reate of 5hrs per paycheck paid bi-weekly.
var ptoRate = 5;
var weeksPerYear = 52;
var checksPerYear = weeksPerYear/2;
console.log(checksPerYear);
/*
START
SET INT paychecksPerYear = 26
SET INT hrsPerPaycheck = 5
SET INT PTOperyearInHours = hrsPerPaycheck * paychecksperyear
DISPLAY "This is a simple program that outputs how many hours you for PTO(Paid Time Off)"

DISPLAY "You earn PTOperYearInHours hour per year."
function hello(name) {
END
*/
// do stuff
// get the name that was passes into the fuction
// and display it
console.log(name);

// SCOPE
var foo3 = 'hello';
let bar2 = 'mundo';
{
    //LOCAL SCOPE
var faz = 'hola';
let bar2 = 'world';
const yo = 'yoyo';
console.log(yo);
}
// console.log(yo);
console.log(bar2);
var foo4 = 1;
var foo5 = 2;
const foo6 =3;

foo4 = 4;
foo5 = 5;
// foo6 = 6;
// foo6 = 6; WILL NOT WORK !!!
