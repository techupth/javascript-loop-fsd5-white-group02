// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// เราได้เก็บ String "TechUp Thailand" ไว้ใน companyName

// ให้สร้าง String อันใหม่จาก Variable companyName โดยที่ String ค่าใหม่ต้องเรียงตัวอักษรกลับด้านกันจาก String อันเก่า และนำ Value ที่ได้มาเก็บไว้ใน Variable reversedCompanyName
// เมื่อโปรแกรมทำงานจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// "dnaliahT pUhceT"
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName += companyName[i];
}
console.log(reversedCompanyName);
console.log(companyName.length);
