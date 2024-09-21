const myText = document.getElementById('myText')
const mySubmit = document.getElementById('mySubmit')
const resultELement = document.getElementById('resultElement')
let age;

mySubmit.onclick = function (){
    age = myText.value;
    age = Number(age);

    if (age >= 100){
        console.log("you're too old")
        resultELement.textContent = "you're too old";
    }
    
    else if (age < 0){
        console.log("your age can't be below 0")
        resultELement.textContent = "your age can't be below 0";
    }
    
    else if(age >= 18){
        console.log("You are old enough for this site")
        resultELement.textContent = "You are old enough for this site";
    }
    
    else {
        console.log("you must be 18+ to enter")
        resultELement.textContent = "you must be 18+ to enter"
    }

}

