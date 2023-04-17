function swapItem(a,b){
   console.log("Input x=",a,"and b=",b);
   [a,b]=[b,a]
   return[a,b]
}

let x= 5
let y=10
console.log("Swap Item :",swapItem(x,y));