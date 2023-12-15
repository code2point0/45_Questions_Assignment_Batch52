let Name:string ="Ahmad zia";
console.log("Lower case "+Name.toLowerCase());
console.log("Upper case "+Name.toUpperCase());
console.log("Title case "+Name.replace(/\b\w/g, (match) => match.toUpperCase()));


export{};