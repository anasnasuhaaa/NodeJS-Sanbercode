const calculate = (num1, num2, opp) => {
  if (opp === "+") {
    console.log(num1 + num2);
  } else if (opp === "-") {
    console.log(num1 - num2);
  } else if (opp === "*") {
    console.log(num1 * num2);
  } else if (opp === "/" || opp === ":") {
    console.log(num1 / num2);
  } else if (opp === "**") {
    console.log(num1 ** num2);
  } else {
    console.log("operasi tidak tersedia");
  }
};

module.exports = { calculate };
