const usernames = ["alice", "bob", "charlie", "admin", "eve"];
if(usernames.length===0)
{
    console.log("Array is Empty")
}
else
{
    console.log(`Array contain ${usernames.length} elements`)
}
usernames.pop()
usernames.pop()
usernames.pop()
usernames.pop()
usernames.pop()
console.log("after removing all elements")
if(usernames.length===0)
{
    console.log("Array is Empty")
}
else
{
    console.log(`Array contain ${usernames.length} elements`)
}