const data=[
    {
        id:1,
        question:"Which of these fish is actually a fish",
        answers:[
              { answer: "swordfish", isCorrect: true },
            { answer: "jellyfish", isCorrect: false },
            { answer: "starfish", isCorrect: false },
            { answer: "crayfish", isCorrect: false },
        ]

    },
     {
        id: 2,
        question: "A flutter is a group of:",
        answers: [
          { answer: "bees", isCorrect: false },
          { answer: "penguins", isCorrect: false },
          { answer: "butterflies", isCorrect: true },
          { answer: "camels", isCorrect: false },
        ],
      },
      {
        id: 3,
        question: "A group of which animals is referred to as a wake?",
        answers: [
          { answer: "bats", isCorrect: false },
          { answer: "vultures", isCorrect: true },
          { answer: "ants", isCorrect: false },
        ],
      },
]
// consts //
const game=document.querySelector(".game")
const result=document.querySelector(".result")
const question=document.querySelector(".question")
const answersCo=document.querySelector(".answers")
const submit=document.querySelector(".submit")
const play=document.querySelector(".play")
////
// lets//
let qi=0
let correct=0
let wrong =0
 let score=0
let selectAnswer;
///
//fun//

const playAgain=()=>{
 qi=0
 correct=0
 wrong =0
 score=0
 selectAnswer;
    showQuestion(qi)
}
play.addEventListener("click",()=>{
    result.style.display="none"
    game.style.display="block"
    playAgain()
})


const shwoResult=()=>{
    result.style.display="block"
    game.style.display="none"


    result.querySelector(".correct").textContent=
    `correct answer =${correct}`
    
    result.querySelector(".wrong").textContent=
    `wrong answer =${wrong}`
    result.querySelector(".score").textContent=
    `score =${(correct - wrong  )*10}` 
       ;

 }
const showQuestion=(number) =>{
    if(qi===data.length)return shwoResult()
    selectAnswer =null
    question.textContent =data[number].question;
    answersCo.innerHTML= data[number].answers.map((item,index) =>
        `
        <div class="answer">
        <input name="answer" type="radio" id=${index} value=${item.isCorrect}/>
        <label for=${index}>${item.answer}</label>
    </div>
        `
    ).join("")
    SelectAnswer()
}
const SelectAnswer=() =>{
    answersCo.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
        
            selectAnswer=(e.target.value);

        })
    })
}

const submitAnswer=()=>{
submit.addEventListener("click",()=>{
    if(selectAnswer !== null)
    {
         selectAnswer ==="true" ? correct++ : wrong++;
    qi++;
    showQuestion(qi)
    }
    else alert("Select An Answer !")
   
})
}
showQuestion(qi)
submitAnswer()
 