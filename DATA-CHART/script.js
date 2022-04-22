const formattedData = {};
calculateFRequncy();
function calculateFRequncy(){
    for(let i=0;i<dataList.length;i++){
        if(formattedData[dataList[i]]){
            formattedData[dataList[i]]++;
        }else{
            formattedData[dataList[i]] = 1;
        }
    }
    drawChart();
}

function drawChart(){
    const parent = document.querySelector(".container");
    Object.keys(formattedData).forEach((item)=>{
        const childBox = document.createElement("div");
        const textNode = document.createElement("span");
        textNode.innerText = item;
        textNode.classList.add("text-node");
        childBox.appendChild(textNode);
        childBox.classList.add("child-box");
        childBox.style.height =`${formattedData[item]*10}px`;
        parent.appendChild(childBox);
    });
}