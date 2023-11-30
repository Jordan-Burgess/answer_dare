class Player{
    constructor(lname, score = 0, playerAnswers = []){
        this.lname = lname
        this.score = score
        this.playerAnswers = playerAnswers
    }
    rightAnswer(){
            this.score += 1
            return `Bravo, that's the right answer. You have ${this.score} points.`
        }
    wrongAnswer(){
        this.score = this.score
        return `Sorry, wrong answer. you have ${this.score} points.`
    }
    }
    

class All{
    constructor(type, question, answer, choices = [], truth = ''){
        this.type = type
        this.question = question
        this.answer = answer
        this.choices = choices
        this.truth = truth
    }
}


let typeIn = 1
let true_false = 2
let multiChoice = 3

let questions = [
    new All(1,"What is the largest mammal on Earth?", "blue whale"),
    new All(1, "What is the tallest animal on Earth?", "giraffe"),
    new All(2, "The very first model of the iPhone was released in 2008", "false", undefined,"The very first model of the iPhone was released in 2007"),
    new All(2, "Our bodies is made up of 70% of water", "false", undefined,"our bodies is made up of 60~65 % of water"),
    new All(3, "Which continent is the largest?", "Asia",["Africa", "Asia","America", "Antartica"]),
    new All(3, "In which year World War I begin?", "1914",["1914","1945","1924","1935"])
]

let actions = ['Do 10 push ups','dance','sing','smile']

let h1tag = document.querySelector('h1')
let next = document.querySelector('.next')
let introduction = document.querySelector('.introduction')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let section5 = document.querySelector('.section5')
let ul1 = document.querySelector('.ul1')
let ul2 = document.querySelector('.ul2')
ul1.style.display = 'none'
ul2.style.display = 'none'
let nameForm = document.querySelector('.nameForm')
let allNames = []
let players = document.createElement('p')
let scores = document.createElement('p')
ul1.appendChild(players)
ul2.appendChild(scores)
let nameInput = document.createElement('input')
nameInput.classList.add('nameInput')

let person = null
let theName = null
let createPlayer = document.createElement('button')
createPlayer.classList.add("newplayer")
let start = document.createElement('button')
start.classList.add('start')
let pic1 = document.createElement('img')
pic1.classList.add('pic1')
let pic2 = document.createElement('img')
pic2.classList.add('pic2')
let next2 = document.createElement('button')
let submitName = document.createElement('button')
submitName.classList.add('submitName')
let addRequest = document.createElement('p')
addRequest.classList.add('addRequest')

let choiceText = document.createElement('p')
choiceText.classList.add('choiceT')
let choiceDescription = document.createElement('p')
choiceDescription.classList.add('choiceDescription')
let questionPic = document.createElement('img')
let darePic = document.createElement('img')
let greetPlayer = document.createElement('h2')
let playerTurn = null
let chosenBox = document.querySelector('.chosenBox')
let goodAnswer = document.createElement('p')
let badAnswer = document.createElement('p')
let message = document.querySelector('.message')
let usedQ = []
let currentQ = 0
let currentA = 0
let section6 = document.querySelector('.section6')
let winner = document.createElement('p')
let topScore = 0
let winnerText = document.createElement('p')
let noQuestion = document.querySelector('.noQ')
noQuestion.style.display = 'none'
let restart = document.querySelector('.reset')
let randomNum = null


function gameStatus(active){
    if(active == true){
        winner.style.display = 'none'
        noQuestion.style.display = 'none'

    }else if(active == false){
        randomNum = false
        submitAnswer = false
        currentQ = 0
        for(let i = 0; i< allNames.length; i++){
            if( allNames[i].score > topScore){
                topScore = allNames[i].score
                winnerText.innerText = `${allNames[i].lname} is the winner`
            }
        noQuestion.style.display = 'block'
        section6.appendChild(winnerText)
        }
    section4.style.display = 'none'
    section5.style.display = 'none'
    }

}


next.addEventListener('click', (event) =>{
    event.stopPropagation()
    h1tag.style.display = 'none'
    next.style.display = 'none'
    introduction.style.display = 'none'

    ul1.style.display = 'block'
    ul2.style.display = 'block'
    players.innerText = "Players"
    scores.innerText = "Scores"
    createPlayer.innerText = "+ add new player"
    addRequest.innerText = "please add new player"
    
    section2.appendChild(createPlayer)
    section2.appendChild(addRequest)
})

createPlayer.addEventListener('click', (event) =>{
    event.stopPropagation()

    submitName.innerText = 'submit'
    submitName.type = 'submit'
    nameForm.appendChild(nameInput)
    nameForm.appendChild(submitName)
    nameInput.style.display = 'block'
    submitName.style.display = 'block'
   
})

nameForm.addEventListener('submit', (event) =>{
    event.preventDefault()
    nameInput.style.display = 'none'
    submitName.style.display = 'none'

    let li1 = document.createElement('li')
    let li2 = document.createElement('li')

    theName = nameInput.value       
    person = new Player(theName)
    li1.innerText = person.lname
    li1.className = person.lname
    li2.innerText = person.score
    li2.className = `${person.lname}score`
    allNames.push(person)
    ul1.appendChild(li1)
    ul2.appendChild(li2)
    section2.appendChild(start)
    start.innerText = 'Start'
})

function shuffleQ(deck){
    let currentIndex =  deck.length
    let randomIndex
    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random()* currentIndex)
        currentIndex--
        [deck[currentIndex], deck[randomIndex]] = [deck[randomIndex], deck[currentIndex]]
    }
}
     
start.addEventListener('click', (event) =>{
    createPlayer.style.display = 'none'
    addRequest.style.display = 'none'
    start.style.display = 'none' 
       
    shuffleQ(questions)
    shuffleQ(actions)

    playerTurn = 0
        section3.appendChild(greetPlayer)
        greetPlayer.innerText = `Hi ${allNames[playerTurn].lname}`
     
    
    choiceText.innerText = 'Please choose'
    choiceDescription.innerText = "This is a random choice. By you click on any of the two cards, a random choice will be made. If the random choice gives answer,then you'll have to answer a question. If instead the random choice made is action, you'll have to answer do an action. By giving the right right, one point is added to the given player. However, no point is given for actions." 
    pic1.style.width = '300px'
    pic1.style.height = '300px'
    pic1.style.backgroundColor = 'blue'
    pic2.style.width = '300px'
    pic2.style.height = '300px'
    pic2.style.backgroundColor = 'green'
    section3.appendChild(choiceText)
    section3.appendChild(pic1)
    section3.appendChild(pic2)
    section3.prepend(choiceDescription)
})

function selectPic(){
    chosenBox.appendChild(next2)
    next2.type = 'submit'
    next2.innerText = 'Next'
    next2.style.color = 'brown'
    next2.style.display = 'block'
    choiceText.style.display = 'none'
    choiceDescription.style.display = 'none'
    pic1.style.display = 'none'
    pic2.style.display = 'none'
    if(randomNum == 0){
        questionPic.style.width = '300px'
        questionPic.style.height = '300px'
        questionPic.style.backgroundColor = 'orange'
        questionPic.style.display = 'block'
        section3.appendChild(questionPic)
        
    }else if(randomNum == 1){
        darePic.style.width = '300px'
        darePic.style.height = '300px'
        darePic.style.backgroundColor = 'red'
        darePic.style.display = 'block'
        section3.appendChild(darePic)
    }
}

pic1.addEventListener('click', (event)=>{
    event.stopPropagation()
    randomNum = Math.floor(Math.random()* 2)
    selectPic()   
})

pic2.addEventListener('click', (event) => {
    event.stopPropagation()
    randomNum = Math.floor(Math.random()* 2)
    selectPic()
})


let randomQ = null
let questionPageText = document.createElement('h2')
let questionTag = document.createElement('p')
let theQuestion = document.createElement('p')
let typeInAnswer = document.createElement('input')
let submitAnswer = document.createElement('button')
let hasAnswer = document.querySelector('.hasAnswer')
submitAnswer.type = 'submit'

let trueBox = document.createElement('input')
let trueLabel = document.createElement('label')
trueBox.type = 'radio'
trueBox.name = 'tf'
trueLabel.htmlFor = `true`
trueLabel.innerText = `true`
let falseBox = document.createElement('input')
let falseLabel = document.createElement('label')
falseBox.type = 'radio'
falseBox.name = 'tf'
falseLabel.htmlFor = `false`
falseLabel.innerText = `false`
let listOptions = document.createElement('ul')
let actionPageText = document.createElement('p')
let theAction = document.createElement('p')
let rightAnsText = document.createElement('p')
let wrongAnsText = document.createElement('p')
let done = document.createElement('button')
done.innerText = 'done'


next2.addEventListener('click', (event) =>{
    event.preventDefault()
    gameStatus(true)
    next2.style.display = 'none'
    greetPlayer.style.display = 'none'
    choiceText.style.display = 'none'
    questionPic.style.display = 'none'
    darePic.style.display = 'none'
    choiceDescription.style.display = 'none'

    typeInAnswer.style.display = 'block'
    submitAnswer.style.display = 'block'
    section4.style.display = 'block'
    questionPageText.style.display = 'block'
    questionTag.style.display ='block'
    theQuestion.style.display = 'block'
    hasAnswer.style.display ='block'
    hasAnswer.innerHTML = ''

    console.log(questions[currentQ])

    if(randomNum == 0){
       questionPageText.innerText = `${allNames[playerTurn].lname} Please answer`
       section4.appendChild(questionPageText)
       questionTag.innerText = 'Question:'
       section4.appendChild(questionTag)
       
       theQuestion.innerText = `${questions[currentQ].question}`
       
       section4.appendChild(theQuestion)
       submitAnswer.innerText = 'submit'
       let dareElem = document.querySelector('.dare')
       dareElem.innerHTML = ''

       if(questions[currentQ].type == 1){
           hasAnswer.appendChild(typeInAnswer)
           hasAnswer.appendChild(submitAnswer)
       }
       else if(questions[currentQ].type == 2){
           hasAnswer.appendChild(trueBox)
           hasAnswer.appendChild(trueLabel)
           hasAnswer.appendChild(falseBox)
           hasAnswer.appendChild(falseLabel)
       }
       else if(questions[currentQ].type == 3){
        listOptions.innerHTML = ''
           for(let i = 0; i<questions[currentQ].choices.length ; i++){
            let options = document.createElement('li')
            let eachOption = document.createElement('input')
            eachOption.type = 'radio'
            eachOption.name = `choice`
            eachOption.value = questions[currentQ].choices[i]
            let label = document.createElement('label')
            label.htmlFor = `${questions[currentQ].choices[i]}`
            label.innerText = `${questions[currentQ].choices[i]}`
            options.appendChild(eachOption)
            options.appendChild(label)
            listOptions.appendChild(options)
           }
        hasAnswer.appendChild(listOptions)
       }
       hasAnswer.appendChild(submitAnswer) 
       
    } 
   else if(randomNum == 1){ 
       actionPageText.innerText = `${allNames[playerTurn].lname} Action`
       let dareElem = document.querySelector('.dare')
       dareElem.innerHTML = ''
       questionTag.innerText = ''
       theQuestion.innerText = ''
       dareElem.appendChild(actionPageText)
       dareElem.appendChild(theAction)
       theAction.innerText = `${actions[currentA]}` 
   }
   
   section4.appendChild(done)
   
})


// let eachPA = allNames[playerTurn].playerAnswers
// let inARowText = document.createElement('p')

hasAnswer.addEventListener('submit', (event) =>{
    event.preventDefault()
    message.innerText = ''
    typeInAnswer.style.display = 'none'
    submitAnswer.style.display = 'none'
    let myAnswer = null
    if(questions[currentQ].type == 1){
        myAnswer = typeInAnswer.value.toLowerCase()
    }else if(questions[currentQ].type == 2){
        myAnswer = event.target.firstElementChild.checked.toString()
    }
    else if(questions[currentQ].type == 3){
        let route = event.target.children[0].childNodes  
        for(let i = 0; i<route.length; i++){
            if(route[i].children[0].checked == true){
                myAnswer = route[i].children[0].value
            }
        }
    }
    let newScore = document.querySelector(`.${allNames[playerTurn].lname}score`)
    let shouldAnswer = document.createElement('p')
   
    let addPoint = document.createElement('input')
    addPoint.type = 'radio'
    addPoint.name = 'add'
    let addLabel = document.createElement('label')
    addLabel.htmlFor = 'add'
    addLabel.innerText = 'add'
    let removePoint = document.createElement('input')
    removePoint.type = 'radio'
    removePoint.name = 'remove'
    removeLabel = document.createElement('label')
    removeLabel.htmlFor = 'remove'
    removeLabel.innerText = 'remove'


    if(myAnswer == questions[currentQ].answer){
        goodAnswer.innerText = allNames[playerTurn].rightAnswer()
        // allNames[playerTurn].playerAnswers.push(1)
        //     if(eachPA.length >= 3 && eachPA[eachPA.length -1] == eachPA[eachPA.length - 2] && eachPA[eachPA.length - 2] == eachPA[eachPA - 3]){
        //         inARowText.innerText = `${allNames[playerTurn].lname} Congratulations, you got three right answers in a row. You can now either add or remove a point on any of the other players. `
        //     }
        
        message.appendChild(goodAnswer)
        newScore.innerText = allNames[playerTurn].score
    }else{
        newScore.innerText = allNames[playerTurn].score
        badAnswer.innerText = allNames[playerTurn].wrongAnswer()
        // shouldAnswer.innerText = `Right answer: ${questions[randomQ].answer}`
        // allNames[playerTurn].playerAnswers.push(0)
        message.appendChild(badAnswer)
        // message.appendChild(shouldAnswer)
    }
    // section4.appendChild('inARowText')
    currentQ += 1
    if(currentQ == questions.length){
        gameStatus(false)
    }
})

  
done.addEventListener('click', (event) =>{
    event.stopPropagation()
    message.innerText = ''
    section4.style.display ='none'
    next2.style.display = 'none'
    hasAnswer.reset()

    playerTurn += 1
    section3.style.display = 'block'
    section3.style.display = 'block'
    choiceText.style.display = 'block'
    choiceDescription.style.display = 'block'
    pic1.style.display = 'block'
    pic2.style.display = 'block'
    if(playerTurn == allNames.length){
        playerTurn = 0
    }
    section3.prepend(greetPlayer)
    greetPlayer.innerText = `Hi ${allNames[playerTurn].lname}`
    greetPlayer.style.display = 'block'
    theQuestion.style.display = 'block'
    currentA += 1
    if(currentA == actions.length){
        currentA = 0
    }
})



   
   
