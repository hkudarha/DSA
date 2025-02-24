// let a=10;
// let b=20;
// console.log("sum is"+a+b); //sum is 10 20
// console.log(a+b+"is sum"); //30 is sum


console.log("1"+1);  //11  use + for concatination
console.log("1"-1);  //0  called as  (Type Coercion) : convert string into number
console.log("1"*5);  //5 
console.log("4"/2);  //2



// let age = Number(prompt("what is your age "));
// console.log(age);

// type casting








// swap value 

let x =10;
let y=20;
console.log(x,y);

// with extra veriable
let z = x; // z=10  x=10
    x=y;   // x=20 y=20
    y=z;   // y=10 
console.log(x,y);

// without extra veriable
x = x+y; //x=30
y = x-y; //y=10
x= x-y;  // x=20
console.log(x,y);


// array destructuring assignmente3
// JavaScript feature introduced in ES6 (ES2015)
[x,y] =[y,x]
console.log(x,y);




// let a = 3456;
// console.log(a%10);  //6
// console.log(Math.floor(a/10)); //345



// let i =11;
// i = i++ + ++i; //11 + 13
// console.log(i); //24



// let a=11, b= 22;
// let c= a +b + a++ + b++ + ++a + ++b;// 11 + 22 + 11 + 22 + 13 + 24;
// console.log(a); //13
// console.log(b); //24
// console.log(c); //103


// let p = true; //true = 1
// p++;
// console.log(p); //2




// let a =10;
// let b= ++(a++); // error : ++10
// console.log(b);
 


console.log(Math.trunc((Math.random()*9000)+1000)) // between  1000 to 10000 


// heron's formula