let btnC = document.querySelector(".btn-с");

btnC.addEventListener("click", () => {
  document.querySelector(".result").innerHTML = "";
});

let btnOne = document.querySelector(".btn-one"); // 1
let btnTwo = document.querySelector(".btn-two"); // 2
let btnThree = document.querySelector(".btn-three"); // 3
let btnFour = document.querySelector(".btn-four"); // 4
let btnFive = document.querySelector(".btn-five"); // 5
let btnSix = document.querySelector(".btn-six"); // 6
let btnSeven = document.querySelector(".btn-seven"); // 7
let btnEight = document.querySelector(".btn-eight"); // 8
let btnNine = document.querySelector(".btn-nine"); // 9
let btnZero = document.querySelector(".btn-zero"); // 0
let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let btnMult = document.querySelector(".btn-multiply");
let btnDivis = document.querySelector(".btn-divis");
let btnResult = document.querySelector(".btn-result");

btnResult.addEventListener("click", () => addResul());

btnOne.addEventListener("click", () => check(1));
btnTwo.addEventListener("click", () => check(2));
btnThree.addEventListener("click", () => check(3));
btnFour.addEventListener("click", () => check(4));
btnFive.addEventListener("click", () => check(5));
btnSix.addEventListener("click", () => check(6));
btnSeven.addEventListener("click", () => check(7));
btnEight.addEventListener("click", () => check(8));
btnNine.addEventListener("click", () => check(9));
btnZero.addEventListener("click", () => check(0));

btnPlus.addEventListener("click", () => check("+"));
btnMinus.addEventListener("click", () => check("-"));
btnMult.addEventListener("click", () => check("*"));
btnDivis.addEventListener("click", () => check("/"));

function check(one) {
  document.querySelector(".result").innerHTML =
    document.querySelector(".result").innerHTML + one;
}

function addResul() {
  let result = eval(document.querySelector(".result").innerHTML);
  if (result) {
    document.querySelector(".result").innerHTML = window.eval(result);
  }
}
