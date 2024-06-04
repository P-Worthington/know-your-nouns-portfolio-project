

/** code to split array items // 
* https://stackoverflow.com/questions/40784961/get-all-string-in-one-variable-after-space-in-javascript
*/


//global variables of words //
let workWords = ["computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse"]
let outdoorWords = ["Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poilet", "River Rivière", "Lake Lac"]
let shoppingWords = ["Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte" ]
let houseWords = ["Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door, Porte"]
let restaruantWords = ["Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]


/** The Fisher-Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
        let currentIndex = array.length;
      
        while (currentIndex != 0) {
      
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
}




let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur"]
shuffle(schoolWords);
let containersEnglish = ["school-english-word-1", "school-english-word-2", "school-english-word-3", "school-english-word-4", "school-english-word-5", "school-english-word-6"];
let containersFrench = ["school-french-word-1", "school-french-word-2", "school-french-word-3", "school-french-word-4", "school-french-word-5", "school-french-word-6"];
let shuffledContainersEnglish = shuffle(containersEnglish);
let shuffledContainersFrench = shuffle(containersFrench);

//to remove reandomly slected array item 
let firstArray = schoolWords.shift();
let secondArray = schoolWords.shift();
let thirdArray = schoolWords.shift();
let forthArray = schoolWords.shift();
let fifthArray = schoolWords.shift();
let sixthArray = schoolWords.shift();
        
/** code to split array items // 
* https://stackoverflow.com/questions/40784961/get-all-string-in-one-variable-after-space-in-javascript
*/        
var values = firstArray.split(" ");
var englishWordOne = values[0];
var frenchWordOne = firstArray.substring(firstArray.indexOf(' ') + 1);
        
//to select random container 
let englishContainerOne = containersEnglish.shift();
let frenchContainerOne = containersFrench.shift();

//to send random word to random container
document.getElementById(englishContainerOne).textContent = englishWordOne;
document.getElementById(frenchContainerOne).textContent = frenchWordOne;
        
//repeat of the above code 
var values = secondArray.split(" ");
var englishWordTwo = values[0];
var frenchWordTwo = secondArray.substring(secondArray.indexOf(' ') + 1);
        
let englishContainerTwo = containersEnglish.shift();
let frenchContainerTwo = containersFrench.shift();

document.getElementById(englishContainerTwo).textContent = englishWordTwo;
document.getElementById(frenchContainerTwo).textContent = frenchWordTwo;
        
var values = thirdArray.split(" ");
var englishWordThree = values[0];
var frenchWordThree = thirdArray.substring(thirdArray.indexOf(' ') + 1);
        
let englishContainerThree = containersEnglish.shift();
let frenchContainerThree = containersFrench.shift();

document.getElementById(englishContainerThree).textContent = englishWordThree;
document.getElementById(frenchContainerThree).textContent = frenchWordThree;
        
var values = forthArray.split(" ");
var englishWordFour = values[0];
var frenchWordFour = forthArray.substring(forthArray.indexOf(' ') + 1);
        
let englishContainerFour = containersEnglish.shift();
let frenchContainerFour = containersFrench.shift();

document.getElementById(englishContainerFour).textContent = englishWordFour;
document.getElementById(frenchContainerFour).textContent = frenchWordFour;
        
var values = fifthArray.split(" ");
var englishWordFive = values[0];
var frenchWordFive = fifthArray.substring(fifthArray.indexOf(' ') + 1);
        
let englishContainerFive = containersEnglish.shift();
let frenchContainerFive = containersFrench.shift();

document.getElementById(englishContainerFive).textContent = englishWordFive;
document.getElementById(frenchContainerFive).textContent = frenchWordFive;
        
var values = sixthArray.split(" ");
var englishWordSix = values[0];
var frenchWordSix = sixthArray.substring(sixthArray.indexOf(' ') + 1);
        
let englishContainerSix = containersEnglish.shift();
let frenchContainerSix = containersFrench.shift();

document.getElementById(englishContainerSix).textContent = englishWordSix;
document.getElementById(frenchContainerSix).textContent = frenchWordSix;
// end of repeat 

        
//telling the programme that these words are equal 
englishContainerOne = frenchContainerOne;
englishContainerTwo = frenchContainerTwo;
englishContainerThree = frenchContainerThree;
englishContainerFour = frenchContainerFour;
englishContainerFive = frenchContainerFive;
englishContainerSix = frenchContainerSix;


//the id of school-english-word-1 is randomised using shuffle. lets find the result and assess that// 

//adding highlighted accent to selected word
function activateAndAssess1 () {
        document.getElementById("school-english-word-1").classList.toggle("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-1");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;
        
        return wordOne;       
}

function activateAndAssess2 () {
        document.getElementById("school-french-word-1",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected-french");
        document.getElementById("school-french-word-3").classList.remove("selected-french");
        document.getElementById("school-french-word-4").classList.remove("selected-french");
        document.getElementById("school-french-word-5").classList.remove("selected-french");
        document.getElementById("school-french-word-6").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-1");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}
        
function activateAndAssess3 () {
        document.getElementById("school-english-word-2").classList.toggle("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-2");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;

        return wordOne;

}
function activateAndAssess4 () {
        document.getElementById("school-french-word-2",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected-french");
        document.getElementById("school-french-word-3").classList.remove("selected-french");
        document.getElementById("school-french-word-4").classList.remove("selected-french");
        document.getElementById("school-french-word-5").classList.remove("selected-french");
        document.getElementById("school-french-word-6").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-2");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess5 () {
        document.getElementById("school-english-word-3").classList.toggle("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-3");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess6 () {
        document.getElementById("school-french-word-3",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected-french");
        document.getElementById("school-french-word-4").classList.remove("selected-french");
        document.getElementById("school-french-word-5").classList.remove("selected-french");
        document.getElementById("school-french-word-6").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-3");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess7 () {
        document.getElementById("school-english-word-4").classList.toggle("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-4");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess8 () {
        document.getElementById("school-french-word-4",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected-french");
        document.getElementById("school-french-word-3").classList.remove("selected-french");
        document.getElementById("school-french-word-5").classList.remove("selected-french");
        document.getElementById("school-french-word-6").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-4");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}

function activateAndAssess9 () {
        document.getElementById("school-english-word-5").classList.toggle("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-5");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;

        return wordOne;
}

function activateAndAssess10 () {
        document.getElementById("school-french-word-5",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected-french");
        document.getElementById("school-french-word-3").classList.remove("selected-french");
        document.getElementById("school-french-word-4").classList.remove("selected-french");
        document.getElementById("school-french-word-6").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-5");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}

function activateAndAssess11 () {
        document.getElementById("school-english-word-6").classList.toggle("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");

        let idAdd = document.getElementById("school-english-word-6");
        idAdd.id = ("firstSelection");
        let wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess12 () {
        document.getElementById("school-french-word-6",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected-french");
        document.getElementById("school-french-word-3").classList.remove("selected-french");
        document.getElementById("school-french-word-4").classList.remove("selected-french");
        document.getElementById("school-french-word-5").classList.remove("selected-french");

        let idAdd = document.getElementById("school-french-word-6");
        idAdd.id = ("secondSelection");
        let wordTwo = idAdd.innerHTML;

        return wordTwo;
}

function isCorrect () {

}

