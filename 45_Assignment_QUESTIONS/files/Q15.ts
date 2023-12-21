let Guests:string[]=["Ahmad","Fatima","Bisma","Hamad"];
let Not_Join:string="Ahmad";
let Index:number=Guests.indexOf(Not_Join);
let New_Guest:string="kainat"
console.log(Guests[Index]+" Not Join us");
Guests[Index] = New_Guest;
for(let i=0;i<Guests.length;i++)
{
    if(i==Index)
        {
            continue;
        }
    else
    {
        console.log("I Hope You all will join me at dinner "+ Guests[i]);
    }

}
export{}