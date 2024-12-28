// import { baseUrl } from "../practicemock2/scripts/baseUrl";
import { baseUrl } from "./baseUrl.js";
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