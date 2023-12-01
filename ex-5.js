// Exercise #5: Concatenate the Alphabets
let companyName = "TechUp";

// กำหนดให้ Variable companyName มีค่าเป็น TechUp
// ให้เขียนโปรแกรมให้แสดงข้อความแบบนี้บนหน้าจอ console

// Number 1 character is T
//   Number 2 character is e
//   Number 3 character is c
//   Number 4 character is h
//   Number 5 character is U
//   Number 6 character is p
// ้
// Hint🕵🏼‍♀️ : เราสามารถใช้ Loop เพื่อที่จะ Access ตัวอักษรแต่ละตัวที่อยู่ใน String ได้
for (let i = 0; i < companyName.length; i++) {
  console.log(`Number ${i + 1} character is ${companyName[i]}`);
}
