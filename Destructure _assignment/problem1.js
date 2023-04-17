function countOccur(text){
    
    const words = text.split(' ');
    const wordCounts = new Map();
    for (const elment of words) {
              const count = wordCounts.get(elment) || 0; 
              wordCounts.set(elment, count + 1); 
            }
//    let element= text.map(el=>el)
   console.log(wordCounts);

}

const inPut="Yash subhash patil , from mumbai , Yash patil"
countOccur(inPut)