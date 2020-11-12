// // document.write()
// // console.log()
// // alert('hello world')

// document.write('hello world');
// console.log('hello world');
// console.log({ name: 'joney' });
// alert('hello people');

// // I woke up early today
// // statements - sets of instructions
// // comments - shortcut command ctrl + /

// console.log('hello world');
// console.log('hello people');
// console.log('hello my friend');
// console.log('hello joney');

// // variables - most basic building block
// // variables - store , access , modify == value
// // declare - assignment operator , assign value
// // assign value letter , modify existing

// let name = 'joney';
// name = 'joney talukdar'
// let age = 21;
// age = 23
// ageGrow = age + 2;
// console.log('My name is ' + name + ' and i am ' + age + ' years old');
// console.log(ageGrow);

// let address, zip, state;
// address = 'Dhaka , Bangladesh';
// zip = 'github.com/jonytalukdar';
// state = 12;
// console.log(address , zip , state);

// // can contains digits , letters , underscore , $
// // must start with letter , $ or _

// let random123_$ = 'random'
// console.log(random123_$);

// // no keyword
// // cannot start with number

// // let let = 'this is demo'
// // console.log(let);

// // case sensitive fullname vs Fullname

// let fullName = 'random'
// console.log(fullName)

// // let vs var vs const

// // using var
// var value = 'some value'
// value = 'somethings is change'
// // using let
// let name = 'john'
// name  = 'john doe'
// // using const (CONSTANT) cant not re assign
// const lastName = 'Jordar'
// lastName = 'mone Jordar'

// console.log(value);
// console.log(name);
// console.log(lastName);

// //  ""  or ''

// const name = "john's course are the best";
// const name2 = "john's course are awesome";
// const name3 = 'john\\ course are best';
// console.log(name);
// console.log(name2);
// console.log(name3);

// // strings concatenation - combine string values
// //  `` - backticks (template strings) easier option

// const name = 'john';
// const lastName = 'shakeandbake';
// let fullName = name + ' ' +  lastName;

// console.log('Hello there your full name is ' + fullName);

// const website = 'google';
// const url = 'https://www.' + website + '.com';

// console.log(url);

// const name = 'john doe';
// const age = 21;
// console.log(`My name is ${name} and i am ${age} years old`);

// // *** Numbers
// // Loosely typed = dont declare type

// const number = 23;
// // let pants = 2.456;
// // pants = 'pants is awesome'
// const number2 = 3.2345;
// const number3 = '4523';

// console.log(number);
// console.log(number2);
// console.log(number3);

// const numberOne = 43424;
// const numberTwo = 4.4545;
// const numberThree = '435';

// const add = numberOne + numberTwo;
// const sub = numberOne - numberTwo;
// const mult = numberOne * numberTwo;
// const div = numberOne / numberTwo;

// console.log(add)
// console.log(sub)
// console.log(mult)
// console.log(div)

// // Number
// // += , -= , *= , /= , ++ , == %
// // % - modulus operator returns the remainder after integer division

// let plusEqual = 45;
// plusEqual += 5;
// console.log(plusEqual);

// let minusEqual = 50;
// minusEqual -= 10;
// console.log(minusEqual);

// let multiEqual = 5;
// multiEqual *= 5;
// console.log(multiEqual);

// let divideEqual = 25;
// divideEqual /= 5;
// console.log(divideEqual);

// const pizzaSlices = 10;
// const children = 4;
// const remainder = pizzaSlices % children;
// console.log(remainder);

// const random = 4 + 3 + 6 + 5 * 10;
// const random2 = (4 + 3 + 6 + 5) * 10;
// console.log(random)
// console.log(random2)

// // implicit type conversion

// const name = 'john';
// const lastName = 'jordar';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// const numberOne = 21;
// const numberTwo = 12;
// const result = numberOne + numberTwo;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// const numberThree = '12';
// const numberFour = '23';
// const result2 = numberThree + numberFour;
// console.log(result2);

// const randomNumber = 13;
// document.querySelector('.form').addEventListener('submit' , function (e){
//     e.preventDefault();
//     let value = document.getElementById('amount').value;
//     value = parseInt(value);
//     console.log('Input Value Type');
//     console.log(value)
//     console.log('Sum Of Two Values');
//     console.log(randomNumber + value)
// })

// //data types - 7 totals
// // primitive - strings , numbers , boolean , null , undefined
// //object - array , object , function

// // typeof - operator (typeof variables) , (typeof value)

// //strings
// const text = 'some text';
// //number
// const number = 321;
// //boolean
// const name = false;
// // null
// const age = null;
// // undefined
// const un=
// // symbol es6
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof un);
// console.log(typeof 'this is strings')
// console.log(typeof 3213)

// //Arrays , Function and Object
// // arrays - [] 0 index based

// const friend1 = 'ana';
// const friend2 = 'ana';
// const friend3 = 'ana';
// const friend4 = 'ana';

// const friends = [
//   'ana',
//   'jollie',
//   'sophie',
//   'turner',
//   'jerry',
//   23,
//   undefined,
//   null,
// ];

// friends[5] = 'julliet'
// let bestFriend = friends[4];
// friends.unshift('joney');
// friends.push('somethings');
// friends.shift();
// friends.pop();
// console.log(friends[0]);
// console.log(friends);
// console.log(friends.length);
// console.log(bestFriend);

//function declare and invoke

function hello() {
  //logic
  console.log('hello there anna');
  console.log('hello there bob');
  console.log('hello there jerry');
}

hello();
hello();
hello();
