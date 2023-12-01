// Exercise #2: Sum the Numbers
let numbers = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
//xercise #2: Sum the Numbers
// กำหนดให้ numbers เป็น Array ที่ประกอบด้วยตัวเลข
// ให้ Declare ตัว Variable total โดย Assign ตัว Value 0
// ให้ใช้ For...of Loop เพื่อคำนวณผลรวมของเลขทุกตัวใน Array
//เมื่อโปรแกรมทำงานจะแสดงผลลัพธ์ 150

for (let number of numbers) {
  total += number;
}

console.log(total);
