var area = document.getElementById("white-space");
function writer(x) {
    area.textContent = area.textContent + x;
    numberOne = numberOne + x;
}
function clean() {
  area.textContent = "";
}
function calc() {
  area.textContent=eval(area.textContent);
}
