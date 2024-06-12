// Soal 7: Buatlah array fruits dengan elemen "Pepaya", "Mangga", dan "Pisang". Tambahkan "Jambu" ke array tersebut.
let fruits = ["Pepaya", "Mangga", "Pisang"];
fruits.push("Jambu");
console.log(fruits);

// Soal 8: Gunakan metode map untuk membuat array baru dari array numbers yang berisi nilai numbers dikalikan 2.
let numbers = [1, 2, 3, 4, 5];
let newNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(newNumbers);
