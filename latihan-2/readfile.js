const fs = require("fs");
const fileName = "latihan-membaca-file.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
