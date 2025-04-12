// arithmetic Operators 

// addition operators 

let add1 = 13 ;
let add2 = 29 ;
let add3 = 38 ;

let  add4 = add1 + add2 + add3 ;

console.log(add4); //    80

// subtration 

let sub1 = 34 ;
let sub2 = 39 ;

let sub3 = sub1 - sub2 ;

console.log  ( sub3 );  //   -5

// multiplication 

let mul1 = 30 ;
let mul2 = 29 ;

let mul3 = mul1 * mul2 ;

console.log (mul3);  //  870

// exponentiation 

let exp1 = 5 ;
let exp2 = 4 ;

let exp3 = exp1 ** 3;

console.log(exp3); //  125 

exp3 = exp1 ** exp2 ;
console.log(exp3);  //  625

// division 

let divi1 = 50;
let divi2 = 4;

let divi3 = divi1 / divi2 ;
console.log (divi3);  //  12.5


// modulus 

let mod1 = 10 ;
let mod2 = 20 ;

let mod3 = mod1 % mod2 ;
console.log ( mod3 ) ;  //  10 


// increment & decrement 

// increment

let inc1 = 27       ;
inc1++;
console.log(inc1);  // 28

// decrement 

let inc2 = 19 ;
inc2-- ;
console.log ( inc2) // 18

// pre increment / post dicrement 

// pre increment
// pre dicrement 

let pre1 = 10;
let pre2 = 30;

console.log(++pre1);  // 11 
console.log(--pre2);  // 29
console.log(pre1);   // 11 
console.log(pre2);   // 29

// post increment
// post dicrement  

let pos1 = 12;
let pos2 = 24;

console.log(pos1++);  // 12 
console.log(pos2--);  // 24 


console.log(pos1);   // 13 
console.log(pos2);   // 23


// assignment operators 

let firstName = "avi"

let as1 = 2 ;

console.log(firstName);  // avi
console.log(as1);  // 2 

// comparison operators 

let age = 18 ;

if(age >= 17)
    console.log("i like you")
else
 console.log("don't like you")
;


// strict equality === v/s loose equality ==

let stri = "10" ;
console.log(typeof(stri)) ;  // string 

let num1 =  10; 
console.log(typeof (num1)); // number 

console.log (stri == num1 );  // true

console.log (stri === num1 )   // false

let stri1 = 42;
let stri2 = 42;

console.log(stri1 === stri2);

let stri3 = "avi";
let stri4 = "avi";

console.log(stri3 === stri4);











