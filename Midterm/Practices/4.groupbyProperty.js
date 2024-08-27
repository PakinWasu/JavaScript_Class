function groupedProperty(data, key) {
 // สร้างอ็อบเจ็กต์ว่างสำหรับเก็บผลลัพธ์
 let result = {};
 // ลูปผ่านอาร์เรย์ของอ็อบเจ็กต์
 for (let item of data) {
   // ดึงค่าของคุณสมบัติที่ใช้ในการจัดกลุ่ม
   let groupKey = item[key];
   // ถ้ายังไม่มีกลุ่มนี้ในผลลัพธ์ ให้สร้างกลุ่มใหม่
   if (!result[groupKey]) {
     result[groupKey] = [];
   }
   // เพิ่มอ็อบเจ็กต์ปัจจุบันในกลุ่มที่เกี่ยวข้อง
   result[groupKey].push(item);
 }
 // คืนค่าอ็อบเจ็กต์ที่จัดกลุ่มแล้ว
 return result;
}
// ตัวอย่างการใช้งาน
const data = [
 { name: "Alice", age: 30, city: "New York" },
 { name: "Bob", age: 40, city: "Chicago" },
 { name: "Charlie", age: 50, city: "New York" },
 { name: "David", age: 60, city: "Chicago" },
 { name: "Eve", age: 70, city: "Los Angeles" }
];

console.log(groupedProperty(data, "city"));
// ผลลัพธ์:
// {
//   "New York": [
//     { name: "Alice", age: 30, city: "New York" },
//     { name: "Charlie", age: 50, city: "New York" }
//   ],
//   "Chicago": [
//     { name: "Bob", age: 40, city: "Chicago" },
//     { name: "David", age: 60, city: "Chicago" }
//   ],
//   "Los Angeles": [
//     { name: "Eve", age: 70, city: "Los Angeles" }
//   ]
// }

console.log(groupedProperty(data, "age"));
// ผลลัพธ์:
// {
//   "30": [{ name: "Alice", age: 30, city: "New York" }],
//   "40": [{ name: "Bob", age: 40, city: "Chicago" }],
//   "50": [{ name: "Charlie", age: 50, city: "New York" }],
//   "60": [{ name: "David", age: 60, city: "Chicago" }],
//   "70": [{ name: "Eve", age: 70, city: "Los Angeles" }]
// }
