// // Strings are immutable in nature



// let s = "Harshita";
// // s = s + " Kudarha"; //reasign
// console.log(s.length);  //8
// console.log(s.slice(0,5)); //harsh
// console.log(s.slice(-4,s.length)); //hita

// console.log(s.substring(2)); //rshita
// console.log(s.toUpperCase()); //HARSHITA

// console.log(s.concat("-","Kudarha","-","kudarha" )); //Harshita-Kudarha-kudarha

// // s.trim(s)  remove spaces from starting and ending

// console.log(s.charAt(2)); //r
// console.log(s[2]);  //r
// console.log(s.charCodeAt(2));  //r=114



// // A- 65
// // a-97
// // 0-48




// let str = "Anchal";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// reverse
// for (let i = str.length-1; i >= 0; i--) {
//     console.log(str[i]);
// }




// pallindrom
// let string = "madam";
// let rev = "";

// for (let i = string.length - 1; i >= 0; i--) {
//   rev = rev + string[i];
// }
// if (rev==string) {
//     console.log("String is Pallindrom");  
// }else{
//     console.log("Not Pallindrom");
// }




// without using extra space -- pallindrom
// let string = "madam";
// let i=0 , j=string.length-1;
// let is_pallindrom = true;
// while(i<j){
//     if(string.charAt(i) !=  string.charAt(j)){
//          console.log("No Pallindrom");
         
//         break
//     }
//     i++;
//     j--;
// }
// console.log("Pallindrom");





// let s= prompt("Enter a char :")
// console.log(s);

// let toggle ="";
// for (let i = 0; i < s.length; i++) {
//    let ch = s.charCodeAt(i);
//     if(ch>=65 && ch<=90){
//        toggle = toggle +String.fromCharCode(ch + 32) ; 
//     }else if(ch>=97 && ch<=122){
//         toggle = toggle + String.fromCharCode(ch - 32)
//     }
// }

// console.log(toggle);






// frequency of each CharacterData
let s = prompt("Enter a Characters");
let arr = new Array(128).fill(0);

for (let i = 0; i < s.length; i++) {
    let indx = s.charCodeAt(i);
    arr[indx] = arr[indx]+1;

}

for (let i = 0; i < arr.length; i++) {
    if(arr[i]>0){
        console.log(String.fromCharCode(i)+" appears at " + arr[i]+ " times");   
    }
}

