let Guests:string[]=["Ahmad","Fatima","Bisma","Hamad"];
//New Guests are added
Guests.unshift("Umar");//Beginning 
Guests.push("Zohaib");//End
Guests.splice(3,0,"Fahad");//middle
for(let i=0;i<Guests.length;i++)
{
    console.log("I Hope You all will join me at dinner "+ Guests[i]);
}
export{}