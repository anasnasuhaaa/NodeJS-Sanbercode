// Soal 5: Buatlah fungsi bernama greet yang menerima satu parameter name dan mencetak "Hello, [name]!" ke konsol.
const greet = (name = "guest") => {
  console.log(`Hello, ${name}!`);
};
greet("Anas Nasuha");

// Soal 6: Buatlah fungsi bernama add yang menerima dua parameter a dan b dan mengembalikan hasil penjumlahannya.
function add(a, b) {
  return a + b;
}
console.log(add(3, 2));
