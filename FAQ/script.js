prepareQuestionView();
function prepareQuestionView(){
    const questionSection = document.querySelector(".parent");
    for(let i=0;i<questionList.length;i++){
        const question = document.createElement("div");
        const questionHeader = document.createElement("h3");
        questionHeader.classList.add("question");
        const answer = document.createElement("span");
        questionHeader.innerText = questionList[i].question;
        answer.innerText = questionList[i].answer;
        answer.classList.add("answer");
        if(i!=0)
        answer.classList.add("hide");
        question.classList.add("question-box");
        question.appendChild(questionHeader);
        question.appendChild(answer);
        questionSection.appendChild(question);
    }
}

const elements = document.querySelectorAll(".question")

elements.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        e.target.parentNode.lastChild.classList.toggle("hide")
     })
})