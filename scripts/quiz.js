// import { baseUrl } from "../practicemock2/scripts/baseUrl";
import { baseUrl } from "./baseUrl.js";
window.onload=()=>{
    getdata();
}
let quizform = document.getElementById("quizform");
quizform.addEventListener("submit", async function(){
    event.preventDefault();
    let title = quizform.title.value;
    let option1 = quizform.option1.value;
    let option2 = quizform.option2.value;
    let option3 = quizform.option3.value;
    let option4 = quizform.option4.value;
    let select = quizform.select.value;

    let obj = {title,option1,option2,option3,option4,select,reviewStatus:false};
    // console.log(obj);
    try{
                await fetch(`${baseUrl}/main`,{
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(obj)
                });
                alert("Question created...");
                quizform.reset();
            }catch(err){
                console.log(err);
                alert("Something went wrong please try again later...");
            }
            
});

function getdata(){
    fetch(`${baseUrl}/main`)
    .then((res)=>res.json())
    .then((data)=>{
        displaydata(data);
    })
}

function displaydata(arr){
    let cont = document.getElementById("cont");
    cont.innerHTML="";
    arr.map((el,i)=>{
        let card = document.createElement("div")
        card.setAttribute("class","card");

        let title =document.createElement("h4");
        title.textContent = `Title : ${el.title}`;

        let option1 = document.createElement("h4");
        option1.textContent = `Option A : ${el.option1}`;

        let option2 = document.createElement("h4");
        option2.textContent = `Option B : ${el.option2}`;

        let option3 = document.createElement("h4");
        option3.textContent = `Option C : ${el.option3}`;

        let option4 = document.createElement("h4");
        option4.textContent = `Option D : ${el.option4}`;

        let correctanswer = document.createElement("h4");
        correctanswer.textContent = `Correct Answer : ${el.select}`;

        let reviewStatus = document.createElement("h4");
        if(reviewStatus === true){
            reviewStatus.textContent = `Status : Reviewed`;
        }else{
            reviewStatus.textContent = `Status : Pending`;
        }

        card.append(title,option1,option2,option3,option4,correctanswer,reviewStatus);
        cont.append(card);
        
    });
}