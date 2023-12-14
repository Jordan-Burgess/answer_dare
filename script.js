class Player{
    constructor(lname, score = 0, playerAnswers = 0){
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

    // new All(1,"What is always in front of you, but can’t be seen?","future"),
    // new All(1,"What gets broken without being held?","promise"),
    // new All(1,"What can you hold in your right hand, but never in your left hand?","left hand"),
    // new All(1,"Who has married many women but was never married?","priest"),
    // new All(1,"What 5-letter word typed in all capital letters can be read the same upside down?","swims"),
    // new All(1,"What is more useful when it is broken?","egg"),
    // new All(1,"If you multiply this number by any other number, the answer will always be the same. What number is this?","zero"),
    // new All(1,"I am easy to lift, but hard to throw. What am I?","feather"),
    // new All(1,"What goes up, but never comes down?","age"),
    // new All(1,"I'm an odd number,take away a letter and I become even. Who am I?","seven"),
    // new All(1,"Which Jamaican runner is an 11-time world champion and holds the record in the 100 and 200-meter race?","usain bolt"),
    // new All(1,"What is the symbol for potassium?","k"),
    // new All(1,"What animal is known for its long trunk and large ears?","elephant"),
    // new All(1,"Who painted the Mona Lisa?"," Leonardo da Vinci"),
    // new All(1,"What is the only continent with land in all four hemispheres?","africa"),
    // new All(1,"In what country was Elon Musk born?", "south africa"),
    // new All(1,"What is the largest mammal on Earth?", "blue whale"),
    // new All(1, "What is the tallest animal on Earth?", "giraffe"),
    // new All(2, "The very first model of the iPhone was released in 2011", "false", undefined,"The very first model of the iPhone was released in 2007"),
    // new All(2,"Ozone has 3 molecules of oxygen","true",undefined,"Ozone has 3 molecules of oxygen"),
    // new All(2,"Usain Bolt set his 100m in 9.58 seconds world record in 2009","true",undefined,"Usain Bolt set his 100m in 9.58 seconds world record in 2009",),
    // new All(2,"The rainbow has 9 colors","false",undefined,"The rainbow has 7 colors"),
    // new All(2, "Our bodies is made up of 90% of water", "false", undefined,"our bodies is made up of 60~65 % of water"),
    // new All(3, "Which continent is the largest?", "Asia",["Africa", "Asia","America", "Antartica"]),
    // new All(3, "In which year World War I begin?", "1914",["1914","1945","1924","1935"]),
    new All(3, "Which language has the more native speakers?","Spanish",["English","Spanish"]),
    new All(3, "How many hearts does an octopus have?", "3",["1","3","5"]),
    new All(3, "Where did sushi originate?", "China",["China","Italy","Congo","France"]),
    new All(3,"Which planet is known as the “Red Planet”?","Mars",["Mars","Jupiter","Neptune","Venus"]),
    new All(3,"What part of the atom has no electric charge?","Neutron",["Neutron","Proton"]),
    new All(3,"Which country invented tea?","China",["Japan","China","India"]),
    new All(3,"What is your body's largest organ?","Skin",["Heart","Skin","Pennis"])
]

let actions = ['Do 10 push ups','Twerk for one minute.','sing','smile',"Do your best impression of me.","Show the last five things in your browser history."]

let h1tag = document.querySelector('h1')
let next = document.querySelector('.next')
let introduction = document.querySelector('.introduction')
let section2 = document.querySelector('.section2')
let section3 = document.querySelector('.section3')
let section4 = document.querySelector('.section4')
let section5 = document.querySelector('.section5')
section5.style.display = 'none'
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
next2.classList.add('next2')
let submitName = document.createElement('button')
submitName.classList.add('submitName')
let addRequest = document.createElement('p')
addRequest.classList.add('addRequest')

let choiceText = document.createElement('p')
choiceText.classList.add('choiceT')
let choiceDescription = document.createElement('p')
choiceDescription.classList.add('choiceDescription')
let questionPic = document.createElement('img')
questionPic.classList.add('questionPic')
let darePic = document.createElement('img')
darePic.classList.add('darePic')
let greetPlayer = document.createElement('h2')
greetPlayer.classList.add('greetPlayer')
let playerTurn = null
let chosenBox = document.querySelector('.chosenBox')
let goodAnswer = document.createElement('p')
goodAnswer.classList.add('goodAnswer')
let badAnswer = document.createElement('p')
badAnswer.classList.add('badAnswer')
let message = document.querySelector('.message')
let usedQ = []
let currentQ = 0
let currentA = 0
let section6 = document.querySelector('.section6')
let winner = document.createElement('p')
let topScore = 0
let winnerText = document.createElement('p')
winnerText.classList.add('winnerText')
let noQuestion = document.querySelector('.noQ')
noQuestion.style.display = 'none'
let restart = document.querySelector('.reset')
let randomNum = null
let add = document.querySelector('.add')
let remove = document.querySelector('.remove')
let sure =  document.querySelector('.sure')
sure.style.display = 'none'
let body = document.querySelector('body')
let shouldAnswer = document.createElement('p')
shouldAnswer.classList.add('shouldAnswer')

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
    pic1.src = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=3840&quality=60'
    pic2.style.width = '300px'
    pic2.style.height = '300px'
    pic2.src = 'https://m.media-amazon.com/images/I/610PjGsZlgL._AC_UF894,1000_QL80_.jpg'
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
    greetPlayer.style.display = 'none'
    choiceText.style.display = 'none'
    choiceDescription.style.display = 'none'
    pic1.style.display = 'none'
    pic2.style.display = 'none'
    if(randomNum == 0){
        
        questionPic.src = '/media/question_card.jpg'
        questionPic.style.display = 'block'
        section3.appendChild(questionPic)
        
    }else if(randomNum == 1){
        darePic.src = 'https://www.usatoday.com/gcdn/presto/2022/08/11/USAT/2a968625-11c6-4dce-8d1b-5135944dc7ec-GTY_1414130800.jpg'
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
let questionBox = document.createElement('div')
questionBox.classList.add('questionBox')
questionBox.style.display = 'none' 
let questionPageText = document.createElement('h2')
questionPageText.classList.add('questionPageText')
let questionTag = document.createElement('p')
questionTag.classList.add('questionTag')
let theQuestion = document.createElement('p')
theQuestion.classList.add('theQuestion')
let typeInAnswer = document.createElement('input')
typeInAnswer.placeholder = 'type your answer'
typeInAnswer.classList.add('typeInAnswer')

let submitAnswer = document.createElement('button')
submitAnswer.classList.add('submitAnswer')
let hasAnswer = document.querySelector('.hasAnswer')
submitAnswer.type = 'submit'

let trueBox = document.createElement('input')
trueBox.classList.add('trueBox')

let trueLabel = document.createElement('label')
trueBox.type = 'radio'
trueBox.name = 'tf'
trueLabel.htmlFor = `true`
trueLabel.classList.add('trueLabel')
trueLabel.innerText = `true`
let falseBox = document.createElement('input')
falseBox.classList.add('falseBox')
let falseLabel = document.createElement('label')
falseLabel.classList.add('falseLabel')
falseBox.type = 'radio'
falseBox.name = 'tf'
falseLabel.htmlFor = `false`
falseLabel.innerText = `false`
let listOptions = document.createElement('ul')
listOptions.classList.add('listOptions')
let actionPageText = document.createElement('p')
actionPageText.classList.add('actionPageText')
let theAction = document.createElement('p')
theAction.classList.add('theAction')
let rightAnsText = document.createElement('p')
rightAnsText.classList.add('rightAnsText')
let wrongAnsText = document.createElement('p')
wrongAnsText.classList.add('wrongAnsText')
let done = document.createElement('button')
done.classList.add('done')
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


    if(randomNum == 0){
       questionPageText.innerText = `${allNames[playerTurn].lname} Please answer`
       section4.appendChild(questionPageText)
       questionTag.innerText = 'Question:'
       questionBox.style.display = 'block'
       questionBox.appendChild(questionTag)
       section4.appendChild(questionBox)
       
       theQuestion.innerText = `${questions[currentQ].question}`
       
       questionBox.appendChild(theQuestion)
       section4.appendChild(questionBox)

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
       questionPageText.style.display = 'none'
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

let inARowText = document.createElement('p')


hasAnswer.addEventListener('submit', (event) =>{
    event.preventDefault()
    message.innerHTML = ''
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
        message.style.color = '#ff6f3c'
        allNames[playerTurn].playerAnswers += 1
        if(allNames[playerTurn].playerAnswers == 3){
            section4.style.display = 'none'
            sure.style.display = 'block'
            body.style.background = 'linear-gradient(#C6EA8D → #FE90AF)'
            inARowText.innerText = `you got 3 right answers in a row`
            //code to take away or add points
            section5.style.display = 'block'
            let playerRadioList = document.querySelector('.playerRadioList')
            for(let i = 0; i<allNames.length; i++){
                let playerRadio = document.createElement('input')
                playerRadio.type = 'radio'
                playerRadio.name = 'PR'
                playerRadio.id = i
                let playerLi = document.createElement('li')
                playerLi.innerHTML = allNames[i].lname
                playerLi.appendChild(playerRadio)

                playerRadioList.appendChild(playerLi)
                
            }
            allNames[playerTurn].playerAnswers = 0  
        }
        
        message.appendChild(goodAnswer)
        newScore.innerText = allNames[playerTurn].score
    }else{
        newScore.innerText = allNames[playerTurn].score
        badAnswer.innerText = allNames[playerTurn].wrongAnswer()
        shouldAnswer.innerText = `Right answer: ${questions[randomQ].answer}`
        message.appendChild(badAnswer)
        message.appendChild(shouldAnswer)
        allNames[playerTurn].playerAnswers = 0
    }

    currentQ += 1
    if(currentQ == questions.length){
        gameStatus(false)
    }
})

sure.addEventListener('submit', (event) =>{
    event.preventDefault()
    console.log('hello')
 //set the Done button function
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



    let chosenPlayerId = null
    let playerRadioList = document.querySelector('.playerRadioList')
    for(let i=0; i<playerRadioList.children.length; i++){
        if(playerRadioList.children[i].children[0].checked == true){
            chosenPlayerId = parseInt(playerRadioList.children[i].children[0].id)
        }
    }
    if(add.checked == true ){
        allNames[chosenPlayerId].score += 1
    }
    else if(remove.checked == true){
        allNames[chosenPlayerId].score -= 1
    }

    message.innerText = ''
    section4.style.display ='none'
    next2.style.display = 'none'
    section5.style.display = 'none'
    hasAnswer.reset()

   
})

  
done.addEventListener('click', (event) =>{
    event.stopPropagation()
    message.innerText = ''
    section4.style.display ='none'
    next2.style.display = 'none'
    section5.style.display = 'none'
    hasAnswer.reset()

    playerTurn += 1
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



   
   
