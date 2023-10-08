//Penggunaan if dan else
let nilai = 75;

if (nilai >= 80) {
  console.log("Kamu dapat A");
} else if (nilai >= 70) {
  console.log("Kamu dapat B");
} else {
  console.log("Kamu dapat C");
}

//Penggunaan nested if
let isSayaGapahamJS = true;
let isSayaPahamJS = false;

if (isSayaGapahamJS) {
  if (isSayaPahamJS) {
    console.log("Gausah belajar.");
  } else {
    console.log("Belajar lah");
  }
} else {
  console.log("Rebahan");
}

//Penggunaan switch dan case
let hari = "";

switch (hari) {
  case "Senin":
    console.log("Hari pertama dalam seminggu.");
    break;
  case "Selasa":
    console.log("Hari kedua dalam seminggu.");
    break;
  default:
    console.log("Hari lainnya dalam seminggu.");
}

//Penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log(`Iterasi ke-${i}`);
}

//Penggunaan while loop
let counter = 0;

while (counter < 5) {
  console.log(`Iterasi ke-${counter}`);
  counter++;
}

//Penggunaan do while loop
let angka = 1;

do {
  console.log(`Angka: ${angka}`);
  angka++;
} while (angka <= 5);

//Penggunaan function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(1, 1);
console.log(`Hasil tambah: ${hasil}`)