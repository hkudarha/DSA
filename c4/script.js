// let arr = new Array(5);

// for (let i = 0; i < arr.length; i++) {
//   arr[i] = Number(prompt("Enter a value! "));
// }
// console.log(arr);



//min /max

// let arr = [10, 30, 40, 50, 9, 3];
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log("max element is : ", max);
// console.log("min element is : ", min);




//2nd max
// let arr = [10, 30, 40,50, 50, 9, 3];
// let max = Math.max(arr[0], arr[1]);
// let sMax = Math.min(arr[0], arr[1]);
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     sMax = max;
//     max = arr[i];
//   } else if (arr[i] > sMax && max != arr[i]) {
//     sMax = arr[i];
//   }
// }
// console.log("smax element is : ", sMax);




// reverse array

// let arr = [10, 30, 40, 50, 50, 9, 3];
// let temp = new Array(arr.length);
// let j = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   temp[j] = arr[i];
//   j++;
// }
// console.log(arr);
// console.log(temp);


let array = [10, 30, 40,  50, 9, 3];
console.log(array);

let i =0, j= array.length-1;
while(i<=j){ 
    let tem = array[i];
    array[i] = array[j];
    array[j] = tem;
    i++;
    j--;
}
console.log(array);
