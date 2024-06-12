// Soal 1: Deklarasikan variabel x dengan nilai 10 dan variabel y dengan nilai 20. Kemudian, deklarasikan variabel sum yang menyimpan hasil penjumlahan x dan y.
const x = 10;
const y = 20;
let sum = x + y;
console.log(sum);

// Soal 2: Apa perbedaan antara var, let, dan const dalam JavaScript?
/* ! Jawaban !
Dalam JavaScript, `var` memiliki function scope, di-hoist ke atas scope-nya, 
dan dapat dideklarasikan ulang dalam scope yang sama. `let` memiliki block scope, 
di-hoist tetapi tidak diinisialisasi sampai eksekusi mencapai deklarasi, 
dan tidak bisa dideklarasikan ulang dalam scope yang sama. 
`const` juga memiliki block scope dan di-hoist seperti `let`, 
tetapi harus diinisialisasi saat deklarasi dan nilainya tidak bisa diubah setelahnya.
 */
