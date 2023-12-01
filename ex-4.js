// Exercise #4: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// กำหนดให้ restaurants เป็น Array ที่เก็บชื่อร้านอาหาร
// ให้ใช้ While Loop ในการเก็บค่า String ที่อยู่ในรูปแบบนี้

// "Restaurant Name: <restaurant-name>";
// <restaurant-name> คือ ชื่อร้านอาหารแต่ละอันที่อยู่ใน Array restaurants
// แล้วให้นำข้อความใหม่ที่ได้ไปเก็บไว้ใน Array ที่มีชื่อว่า newRestaurants
// สุดท้าย ให้แสดงค่าของ newRestaurants ออกมาดูทางหน้าจอด้วย console.log
// เมื่อโปรแกรมทำงาน ผลลัพธ์ทางหน้าจอจะเป็นแบบนี้

// [
//   "Restaurant Name: KFC",
//   "Restaurant Name: MOMO PARADISE",
//   "Restaurant Name: Nabezo",
// ];
// Hint🕵🏼‍♀️ : เราสามารถเพิ่มค่าลงใน Array ด้วยคำสั่ง Array.push
let i = 0;

while (i < restaurants.length) {
  newRestaurants.push("Restaurant Name: " + restaurants[i]);
  i++;
}
console.log(newRestaurants);
