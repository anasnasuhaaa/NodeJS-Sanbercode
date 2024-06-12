// Soal 9: Buatlah object person dengan properti name bernilai "John" dan age bernilai 30. Tambahkan properti occupation dengan nilai "Developer".
let person = {
  name: "John",
  age: 30,
};
person.occupation = "Developer";
console.table(person);

// Soal 10: Buatlah array people yang berisi tiga object, masing-masing dengan properti name dan age. Gunakan metode filter untuk mendapatkan array baru yang hanya berisi orang dengan age di atas 25.
let people = [
  {
    name: "Anas",
    age: 20,
  },
  {
    name: "Nasuha",
    age: 30,
  },
];
let filterPeople = people.filter((p) => p.age >= 25);
console.table(filterPeople);
