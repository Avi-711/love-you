
/*


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

// and && 

let and1 = true;
let and2 = false;
let and3 = true;

console.log( and1 && and2 );   // false
console.log(and2 && and3 );   // false 
console.log(and3 && and1 );  // true 

let and4 = 0 ;
let and5 = 1 ;
let and6 = 1 ;

console.log(and4 && and5 );  // false 
console.log(and5 && and6 );  // true 
console.log(and6 && and4 );   // false 

// or || 

let or1 = true ;
let or2 = false ;
let or3 = false ;

console.log(or1 || or2 ); // true 
console.log(or2 || or3 ); // false 
console.log(or3 || or1 ); //  true 


 // not ! 

 let alert1 = false ;
 let alert2 ;
 let alert3 = NaN ;
 let mySum = 45;
 let gone = false ;
 let isFirst = true ;

 console.log(!alert1);
 console.log(alert2);
 console.log(alert3);
 console.log(mySum);
 console.log(gone);
 console.log(isFirst);

//  ternary operators 

let myage = 18 ;

(myage >= 18 ) ? (console.log("i like you ") ) : (console.log("i love ..."));



// conditionals   

let drive = 19;
if(drive >= 18)
{
    console.log("can drive")

}

    else {
console.log("connot drive")
    }
 

    let number = 5;
    if(number == 1)
      {
        console.log("A")
      }

      else if (number == 2)
      {
        console.log("B")
      }

      else if (number == 3)
      {
        console.log ("c")
      }
 
      else if (number == 4)

        {
            console.log("D")
        }

        else if ( number == 5)
        {
            console.log("f")
        }

        else {
            console.log("E");
        };




        let speed = 39;
        if(speed > 50 )
{
  console.log("over speed ");
}
 
if(speed > 30 && speed <= 40)
{
  console.log( "normal speed ");
}
if (speed < 30 )
{
  console.log("slow");
}

let myage1 = 18   ;
if (myage1 >= 18 )
{
  console.log("i can drive");
}

else {
  console.log("i connot drive ");
}


let apple = 3 ;
switch(apple) {
  case "or":
    console.log("hello");
    break;
    case - 3 :
      console.log("hi avi ");

      break;
      default:
      console.log("hiaa");

}

// for  loop 

for (let i = 1 ; i <= 5 ; i++);
{
  console.log("avi ")
}


for (let avi = 2 ; avi <= 5 ; avi++);
{
  console.log(avi)
}



// break 

for( let x = 1 ; x <= 10 ; x++ )
  if (x == 4)
  {
    break;
  }
else {
  console.log(x);
}

// continue 

for ( let i = 1 ; i <= 7; i++)
if (i == 5)
{
  continue;
}
else {
  console.log(i);
}


// while loop 

 let a = 1 ;
 while(a <= 5)

 {
  if(a == 3 )
   
  {
    a++;
    continue;
  }
  else {
    console.log(a);
  }
  a++;
 }


 let i = 1 ;
 while (i <= 8)
 {
  if (i == 5)
  {break}
  else {
    console.log(i);
    i++;
  }
 }

//  do while 

let age =  1 ;
do {
  console.log("hello");
  age++;
}while(age <= 10);  



// String same as pre tag 

let age = `gi 
ijew
kej
ej
js`;
console.log(age);

// .
let firstName = new String (`hiello`);
console.log(firstName);

let num = new Number(28);
console.log(num)

*/

// space between 

let myName = "Avi";
let lName = "hello";
let full = (myName + " " + lName);
console.log(full);

// length 
console.log(lName.length)

// upercase 
console.log(myName.toUpperCase());
// lowercase 
console.log(full.toLowerCase())



// add commnt 

let age = 38;
let age2 = 38;
let a = age + age2;
console.log(` sum age plus ${age}  
  or ${age2} total ${a}`);


  // word cutter 

  let i = "hello baby";
  console.log(i.substring(1,3)); 
  console.log(i.substring(1)); 


  let sentence = "hello hi avi hello shla ";
  let words = sentence.split(' ');
  console.log(words)

  let x = "heloo hi  \"HELLO\" JIA ";
  console.log(x)

