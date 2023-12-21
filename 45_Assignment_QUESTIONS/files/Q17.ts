export let Guests:string[]=["Ahmad","Fatima","Bisma","Hamad"];
//New Guests are added
Guests.unshift("Umar");//Beginning 
Guests.push("Zohaib");//End
Guests.splice(3,0,"Fahad");//middle
console.log("We have space for only two guests. On the Dinner");
console.log("Im Sorry you are not invited "+Guests.pop());
console.log("Im Sorry you are not invited "+Guests.pop());
console.log("Im Sorry you are not invited "+Guests.pop());
console.log("Im Sorry you are not invited "+Guests.pop());
console.log("Im Sorry you are not invited "+Guests.pop());
for(let i=0;i<Guests.length;i++)
{
    console.log("Only These Guests Are invited "+ Guests[i]);
}
Guests.pop();
Guests.pop();
console.log("List Empty");
for(let i=0;i<Guests.length;i++)
{
    console.log("Only These Guests Are invited "+ Guests[i]);
}
export{}