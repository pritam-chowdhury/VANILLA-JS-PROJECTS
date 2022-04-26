
const imgArr = [];
let currentIndex = 0;
function getData(){
  const response = fetch("https://jsonplaceholder.typicode.com/photos");
  response.then(res =>
    res.json()).then(d => {
        prepareImgArr(d);
    })
}
function prepareImgArr(imgList){
    imgList.forEach(element => {
       imgArr.push(element.url);
    });
  populateimg(imgArr[currentIndex]);
}

function populateimg(src){
    const elm = document.querySelector("#image");
    elm.src = src;
}
function nextImg(){
    currentIndex++;
    populateimg(imgArr[currentIndex]);
}
function prevImg(){
    currentIndex--;
    populateimg(imgArr[currentIndex])
}
document.querySelector(".btns").addEventListener("click",(e)=>{
   if(e.target.id === "right-btn" && currentIndex!= imgArr.length-1){
     nextImg()
   }else if(e.target.id === "left-btn" && currentIndex != 0){
       prevImg();
   }
})
getData();