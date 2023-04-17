function minMax(arr){
   let min=Math.min(...arr)
   console.log(min);
   let max=Math.max(...arr)
   console.log(max);
   let finalOp= new Object();
   finalOp.Min =min
   finalOp.Max = max;

   console.log( finalOp);

}

const arr1 =[1, 2, 3, 4, 5,5,7,8,12,79,10000]
minMax(arr1);