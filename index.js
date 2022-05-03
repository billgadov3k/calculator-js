let queryResult = document.querySelector(".result");

const buttons = [
  { selector: "btnOne", param: 1 },
  { selector: "btnTwo", param: 2 },
  { selector: "btnThree", param: 3 },
  { selector: "btnMultiply", param: "*" },
  { selector: "btnFour", param: 4 },
  { selector: "btnFive", param: 5 },
  { selector: "btnSix", param: 6 },
  { selector: "btnDivis", param: "/" },
  { selector: "btnSeven", param: 7 },
  { selector: "btnEight", param: 8 },
  { selector: "btnNine", param: 9 },
  { selector: "btnPlus", param: "+" },
  { selector: "btnC", param: "clear" },
  { selector: "btnZero", param: 0 },
  { selector: "btnResult", param: -1 },
  { selector: "btnMinus", param: "-" },
];

// добавим кнопки в калькулятор через JS
buttons.forEach((value) => {
  let createEl = document.createElement("button");
  createEl.setAttribute("class", `btn ${value.selector}`);
  if (value.param == -1) {
    createEl.innerText = "=";
  } else {
    createEl.innerText = value.param;
  }
  let body = document.querySelector(".btn-keys");
  body.appendChild(createEl);
});

//клики и функции обработчики
buttons.forEach((value) => {
  let el = document.querySelector(`.${value.selector}`);
  if (value.param == -1) {
    el.addEventListener("click", () => addResul());
  } else if (value.param == "clear") {
    el.addEventListener("click", () => {
      queryResult.value = '';
    });
  } else {
    el.addEventListener("click", () => check(value.param));
  }
});

function check(one) {
  if (one == "+" || one == "-" || one == "*" || one == "/"){
    queryResult.value = queryResult.value + " " + one + " ";
  } else {
    queryResult.value = queryResult.value + one;
  }
};

function addResul() {
  let result = 0;
  let operator = "";
  let data = queryResult.value.trim().split(" ");
  console.log(data);
  for (let i=0; i < data.length; i++){
    console.log("Элемент массива:", data[i])
    if (data[i] == "+" || data[i] == "-" || data[i] == "*" || data[i] == "/") {
      operator = data[i];
      continue;
    } else {
      console.log("дата", data[i]);
      if (operator == "") {
        result = result + Number(data[i]);
      }
      switch (operator) {
        case "+":
          result = result + Number(data[i]);
          break;
        case "-":
          result = result - Number(data[i]);
          break;
        case "*":
          result = result * Number(data[i]);
          break;
        case "/":
          result = result / Number(data[i]);
          break;
      }
    }
    console.log("Итоговый результат:", result);
  }
  queryResult.value = result;
}
