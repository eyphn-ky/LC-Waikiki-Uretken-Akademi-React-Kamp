let mainElement =  document.getElementById("main-element");
let width=height=300,count=30;
var widthInput = document.getElementById("width");
var heightInput = document.getElementById("height");
var imageCount = document.getElementById("image-count");

const imageGetter=(width,height)=>{ //send a request and get a image to show
    let img=document.createElement("img");
    img.src = "https://source.unsplash.com/random/"+width+"x"+height+"/?sig="+random();
    img.classList.add("img-thumbnail");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("d-flex");
    imgContainer.classList.add("justify-content-center");
    imgContainer.classList.add("col-md-4");
    imgContainer.classList.add("mt-3");
    imgContainer.append(img);
    mainElement.appendChild(imgContainer);
};
const imageShow =()=>{
    mainElement.innerHTML="";
    CheckIfInputsNull();
    for(var i=0;i<Number(count);i++)
    {
        imageGetter(width,height);
    }
}
const random =()=>{ //create a random number
   return Math.floor(Math.random()*1000);
}
const CheckIfInputsNull=()=>{  //set inputs default if they null
    imageCount.value=="" ? count=30:count=imageCount.value;
    widthInput.value=="" ? width=300:width=widthInput.value;
    heightInput.value=="" ? height=300:height=heightInput.value;
}

