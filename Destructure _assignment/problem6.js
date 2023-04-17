function infoExtract(obj){
   console.log("Name of Person : ",obj.name);
   console.log("Street Name : ",obj.address.street);

}

const yash = {
   name: "Yash",
   age: 23,
   address: {
     street: "Yashwant Mastar road",
     city: "Mumbai",
     state: "Maharashtra",
     zip: "401101"
   }
 };
 infoExtract(yash)
 