var numberOne = "";
var numberTwo = "";
var area = document.getElementById("white-space");
var isProcessChoosen = false;
var isNotClean = false;
var process = "";
var lastResult='';
function writer(x) {
  if (!isProcessChoosen) {
    area.textContent = area.textContent + x;
    numberOne = numberOne + x;
  } else {
    area.textContent = area.textContent + x;
    numberTwo = numberTwo + x;
  }
}

function clean() {
  area.textContent = "";
  process="";
  isProcessChoosen=false;
  numberOne="";
  numberTwo="";
}

function selectProcess(processType) {
    if(process.length==1)
    {
        let string = area.textContent;
        process=processType;
        area.textContent = string.substring(0,string.length-1);
       area.textContent=area.textContent+process;
    }
    if(!isProcessChoosen)
    {
        area.textContent = area.textContent + processType;
        process = processType;
        isProcessChoosen = true;
    }
}
function calc() {
  if (process == "/") {
    area.textContent = parseFloat(Number(numberOne) / Number(numberTwo));
  } else if (process == "+") {
    area.textContent = parseFloat(Number(numberOne) + Number(numberTwo));
  } else if (process == "*") {
    area.textContent = parseFloat(Number(numberOne) * Number(numberTwo));
  } else if (process == "-") {
    area.textContent = parseFloat(Number(numberOne) - Number(numberTwo));
  }
}
