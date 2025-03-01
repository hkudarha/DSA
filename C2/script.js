// NaN === NaN   : (false)
// isNaN(NaN)    : true

// let ans = Number(prompt("What is your age ? "));
// if (isNaN(ans)) {
//   console.log("invalid input !");
// } else if (ans >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can't vote");
// }

// let amount = Number(prompt("what is the final amount ? "));
// let des =0;
// if (amount > 0 && amount <= 5000) {
//   dis =0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis= 5;
// }
//  else if (amount > 7000 && amount <= 9000) {
//   dis=10;
// }
//  else if (amount > 9000) {
//   dis= 20;
// }else{
//     console.log("wrong input!");
// }
// console.log(amount - Math.floor((dis * amount) / 100));


// bijli Bill

// let unit = Number(prompt("Enter electricity Unit"));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//     amount +=(unit - 100)*6;
//     unit = 100;
// }
// amount += unit*4;
// console.log(amount)



let amount = 423;
if(amount>= 500){
    console.log("500 ke note : ", Math.floor(amount/500));
    amount = amount% 500
}
if(amount >= 200){
    console.log("200 ke note :", Math.floor(amount/200));
    amount= amount%200
}
if(amount >= 100){
    console.log("100 ke note :", Math.floor(amount/100));
    amount= amount%100
}
if(amount >= 50){
    console.log("50 ke note :", Math.floor(amount/50));
    amount= amount%50
}
if(amount >= 20){
    console.log("20 ke note :", Math.floor(amount/20));
    amount= amount%20
}
if(amount >= 10){
    console.log("10 ke note :", Math.floor(amount/10));
    amount= amount%10
}
if(amount >= 5){
    console.log("5 ke note :", Math.floor(amount/5));
    amount= amount%5
}
if(amount >= 2){
    console.log("2 ke note :", Math.floor(amount/2));
    amount= amount%2
}
if(amount === 1){
    console.log("1 ke note :", (amount));
    amount= amount%1
}
