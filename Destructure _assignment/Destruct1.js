// 1.You are building a word count generator that will take a large string of text as input and output the words and
// the number of times they are present in the string. Your task is to write a function that can count the
// occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can
// assume that the string only contains alphabetic characters and spaces./

// function countOccur(text){
    
//     const words = text.split(' ');
//     const wordCounts = new Map();
//     for (const elment of words) {
//               const count = wordCounts.get(elment) || 0; 
//               wordCounts.set(elment, count + 1); 
//             }
// //    let element= text.map(el=>el)
//    console.log(wordCounts);

// }

// const inPut="Yash subhash patil , from mumbai , Yash patil"
// countOccur(inPut)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const arr1=[1,2,3,4,5,6,7,8,9,2,5,8]
// const arr2 = Array.from(arr1)
// console.log("Input Array",arr2);
// let arr3=new Set(arr2)
// console.log("Sorted set",arr3);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function swapItem(a,b){
//    console.log("Input x=",a,"and b=",b);
//    [a,b]=[b,a]
//    return[a,b]
// }

// let x= 5
// let y=10
// console.log("Swap Item :",swapItem(x,y));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function finalItem(arr){
//    console.log(arr.length);
//    let l=arr.length
//    let p = arr[0]
//    let q = arr[1]
//    let r = arr[l-1]
//    console.log([p,q,r]);
// }
// const arr1 =[1, 2, 3, 4, 5,5,7,8,12,79]
// finalItem(arr1);
// /+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function minMax(arr){
//    let min=Math.min(...arr)
//    console.log(min);
//    let max=Math.max(...arr)
//    console.log(max);
//    let finalOp= new Object();
//    finalOp.Min =min
//    finalOp.Max = max;

//    console.log( finalOp);

// }

// const arr1 =[1, 2, 3, 4, 5,5,7,8,12,79,10000]
// minMax(arr1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function infoExtract(obj){
//    console.log("Name of Person : ",obj.name);
//    console.log("Street Name : ",obj.address.street);

// }

// const yash = {
//    name: "Yash",
//    age: 23,
//    address: {
//      street: "Yashwant Mastar road",
//      city: "Mumbai",
//      state: "Maharashtra",
//      zip: "401101"
//    }
//  };
//  infoExtract(yash)
 
