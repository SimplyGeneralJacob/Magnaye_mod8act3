let text = document.getElementById('text')
let leaf = document.getElementById('leaf')
let hill1 = document.getElementById('hill1')
let hill4 = document.getElementById('hill4')
let hill5 = document.getElementById('hill5')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})

const firstName = ["Ben", "Ted", "Regan", "John", "Johnathan", "Cole", "Jordan", "Drew", "Delilah", "Sammantha",
"Mia", "Lukas", "Nancy", "Jimmy", "Amy", "Alyssa", "Autumn", "Dianne", "Xavier"]

const secondName = ["Byrne", "Byron", "James", "Allison", "Kent", "Osborne", "Rogers", "Hill", "Carey", "Case",
"White", "Robinson", "Potter", "Ramos", "McMillan", "Barber", "Snyder", "Aguirre"]

const getRandomNumber = (max) => Math.floor(Math.random() * max)

const getRandomName = () => `${firstName[getRandomNumber(firstName.length)]} ${secondName[getRandomNumber(secondName.length)]}`

const setRandomName = () => {
    document.getElementById('name').value = getRandomName()
}

document.getElementById("generate").addEventListener("click", setRandomName)

var num1 = document.getElementById("skills")
var num2 = document.getElementById("emotion")
var num3 = document.getElementById("practical")
var age = document.getElementById("age")

document.getElementById("generate").addEventListener("click", function() {
    num1.value = Math.floor(Math.random() * 21)
    num2.value = Math.floor(Math.random() * 21)
    num3.value = Math.floor(Math.random() * 21)
    age.value = Math.floor(Math.random() * (60-18) + 18 )
})

const gender = ["Male", "Female"]

const getRandomGender = () => `${gender[getRandomNumber(gender.length)]}`

const setRandomGender = () => {
    document.getElementById('gender').value = getRandomGender()
}

document.getElementById("generate").addEventListener("click", setRandomGender)

const nationality = ["United States", "Philippines", "United Kingdom", "Germany", "France", "Spain", "Italy", "Canada", "Mexico", "Brazil"
, "China", "Japan", "Vietnam", "Australia", "Russia"]

const getRandomNation = () => `${nationality[getRandomNumber(nationality.length)]}`

const setRandomNation = () => {
    document.getElementById('nation').value = getRandomNation()
}

document.getElementById("generate").addEventListener("click", setRandomNation)

const setHighestScore = () => {
    if (+num1.value > +num2.value && +num1.value > +num3.value){
        document.getElementById("highScore").innerText = "Skills Assessment Test with " + num1.value + "!"
    }
    else if (+num2.value > +num1.value && +num2.value > +num3.value){
        document.getElementById("highScore").innerText = "Emotional Intelligence Test with " + num2.value + "!"
    }
    else if (+num3.value > +num1.value && +num3.value > +num2.value){
        document.getElementById("highScore").innerText = "Practical Assessment Test with " + num3.value + "!"
    }
    else if (+num1.value == +num2.value){
        document.getElementById("highScore").innerText = "Skils and Emotional Intelligence Test with " + num1.value + " and " + num2.value + "!"
    }
    else if (+num2.value == +num3.value){
        document.getElementById("highScore").innerText = "Emotional and Practical Assessment Test with " + num2.value + " and " + num3.value + "!"
    }
    else if (+num1.value == +num3.value){
        document.getElementById("highScore").innerText = "Skils and Practical Assessment Test with " + num1.value + " and " + num2.value + "!"
    }
}
document.getElementById("generate").addEventListener("click", setHighestScore)

const setFirstName = () => {
   x = document.getElementById("name").value[0]
   document.getElementById("firstLetter").innerText = x;
}

document.getElementById("generate").addEventListener("click", setFirstName)


var minutes = document.getElementById("timeTook")

document.getElementById("generate").addEventListener("click", function() {
    minutes.value = Math.floor(Math.random() * (360 - 60) + 60)
    hours = Math.floor(minutes.value / 60)
    remMinutes = minutes.value % 60
    document.getElementById("timeTook").innerHTML = hours + " hours and " + remMinutes + " minutes."
})