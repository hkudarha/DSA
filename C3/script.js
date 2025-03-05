// let pr = prompt("Enter a number!");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input!");
//   } else {
//     if (n > 0) {
//       for (var i = 1; i <= Math.floor(n/2); i++) {
//         if (n % i === 0) {
//             console.log(i);
//         }
//       }
//       console.log(n);
//     } else {
//       console.log("should be +ve and more than 0 ");
//     }
//   }
// }



//prime number 

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input!");
//   } else {
//     if (n > 0) {
//       console.log(isPrime(n));
//     } else {
//       console.log("should be +ve and more than 0 ");
//     }
//   }
// }
// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }




// if (pr === null) {
//   console.log("cancelled");
// } else {
//   var n = Number(pr);
//   if (isNaN(n)) {
//     console.log("Invalid Input!");
//   }
//    else {
//     if (n > 0) {
//         // var sum =0;
//         var rev = 0;
//         while(n>0){
//             var rem = n%10;
//             rev = (rev *10)+ rem;
//             // sum = sum+rem;
//             n= Math.floor(n/10);
//         }
//         console.log((rev));    
//     } else {
//       console.log("should be +ve and more than 0 ");
//     }
//   }
// }





// if (pr === null) {
//     console.log("cancelled");
//   } else {
//     var n = Number(pr);
//     var copy =n;
//     if (isNaN(n)) {
//       console.log("Invalid Input!");
//     }
//      else {
//       if (n > 0) {
//               var sum= 0;
              
//               while(n>0){
//                 var rem = n%10;
//                 var fact = 1;
                
//                 for(let i=1 ; i<= rem; i++){
//                   fact= fact*i;
//                 }

//                 sum= sum+ fact;
//                 n=Math.floor(n/10);
//               }
//               if(copy == sum){

//                 console.log("given number is strong : ",sum);
//               }
//               else{
//                 console.log("not strong");
                
//               }
//       } else {
//         console.log("should be +ve and more than 0 ");
//       }
//     }
//   }
   




let random = Math.floor(Math.random()*100)+1;

let guess = -1;

while(guess !== random){
  guess = Number(prompt("Guese the number !"));

  if(isNaN(guess) || guess<1 || guess>100){
    console.log("try again, Enter number between 1 to 100");
    continue;
  }
  if(guess>random){
    console.log("to high, try again"); 
  }else if(guess<random){
    console.log("to low, try again");  
  }else{
    console.log("Congratulations🎉👏",guess);   
  }
}