let queryResult = document.querySelector(".result");

document.querySelector(".btnC").addEventListener("click", () => {
  queryResult.innerHTML = "";
});

const buttons = [
  {selector: "btnOne", param: 1},
  {selector: "btnTwo", param: 2},
  {selector: "btnThree", param: 3},
  {selector: "btnMultiply", param: "*"},
  {selector: "btnFour", param: 4},
  {selector: "btnFive", param: 5},
  {selector: "btnSix", param: 6},
  {selector: "btnDivis", param: "/"},
  {selector: "btnSeven", param: 7},
  {selector: "btnEight", param: 8},
  {selector: "btnNine", param: 9},
  {selector: "btnPlus", param: "+"},
  {selector: "btnZero", param: 0},
  {selector: "btnResult", param: -1},
  {selector: "btnMinus", param: "-"},
];

buttons.forEach((value) => {
    let el = document.querySelector(`.${value.selector}`);
    if (value.param == -1){
      el.addEventListener("click", () => addResul());
    } else {
      el.addEventListener("click", () => check(value.param));
    }
} );

function check(one) {
  queryResult.innerHTML = queryResult.innerHTML + one;
}

function addResul() {
  let result = eval(queryResult.innerHTML);
  if (result) {
    queryResult.innerHTML = window.eval(result);
  }
}
