const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const markupColor = document.querySelector("body");
const onBtnStart = document.querySelector("button[data-action=start]");
const onBtnStop = document.querySelector("[data-action=stop]");

const DELAY = 1000;
onBtnStart.addEventListener("click", onChangeStart);
onBtnStop.addEventListener("click", onChangeStop);

function onChangeStart(fn) {
  return (setId = setInterval(() => {
    onBtnStart.setAttribute("disabled", "disabled");
    markupColor.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, DELAY));
}
function onChangeStop() {
  clearInterval(setId);
  onBtnStart.removeAttribute("disabled", "disabled");
}
