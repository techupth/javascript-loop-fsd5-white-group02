// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// Start coding here
for (let letters in companyName) {
  console.log(
    ` Number ${Number(letters) + 1} character is ${companyName[letters]}`
  );
}
