// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let letters of companyName) {
  console.log(`step : ${reversedCompanyName}`);
  reversedCompanyName = letters + reversedCompanyName;
}

console.log(reversedCompanyName);
