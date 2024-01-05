const currentUsers = ["alice", "bob", "charlie", "eve"];
const newUsers = ["david", "alice", "maria", "charlie"];

for (const newUser of newUsers) {
  if (currentUsers.includes(newUser.toLowerCase())) {
    console.log(`${newUser}, that username is already taken. Please choose a new one.`);
  } else {
    console.log(`${newUser}, your username is available!`);
  }
}
