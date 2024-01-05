let usernames = ["alice", "bob", "charlie", "admin", "eve"];
for (let i=0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${usernames[i]}, thank you for logging in again!`);
  }
}
export{}