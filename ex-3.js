// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber = numbers[0];
// Start coding here
// Exercise #3: Find the Minimum Number

// ให้ numbers เป็น Array ที่ประกอบด้วยตัวเลข
// ให้ใช้ For Loop แบบดั้งเดิมในการหา Value ที่น้อยที่สุดใน numbers และนำ Value ที่ได้ไปเก็บไว้ใน Variable ที่ชื่อว่า minNumber
// กำหนดให้โค้ดตั้งต้นมีดังนี้

// Exercise #3: Find a Minimum Number
// let numbers = [100, 20, 3, 1000];
// let minNumber;

// console.log(minNumber);
// เมื่อโปรแกรมทำงานจะแสดงผลลัพธ์ทางหน้าจอแบบนี้
// 3
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}
console.log(minNumber);
