/** The Fisher-Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */

/** code to split array items // 
* https://stackoverflow.com/questions/40784961/get-all-string-in-one-variable-after-space-in-javascript
*/


//global variables of words //
let workWords = ["computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse"]
let outdoorWords = ["Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poilet", "River Rivière", "Lake Lac"]
let shoppingWords = ["Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte" ]
let houseWords = ["Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door, Porte"]
let restaruantWords = ["Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]

function shuffle(array) {
        let currentIndex = array.length;
      
        while (currentIndex != 0) {
      
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
}



function schoolGame() {
        let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Proteactor Rapporteur"]
        shuffle(schoolWords);
        let containersEnglish = ["school-english-word-1", "school-english-word-2", "school-english-word-3", "school-english-word-4", "school-english-word-5", "school-english-word-6"];
        let containersFrench = ["school-french-word-1", "school-french-word-2", "school-french-word-3", "school-french-word-4", "school-french-word-5", "school-french-word-6"];
        shuffle(containersEnglish);
        shuffle(containersFrench);

        let firstArray = schoolWords.shift();
        let secondArray = schoolWords.shift();
        let thirdArray = schoolWords.shift();
        let forthArray = schoolWords.shift();
        let fifthArray = schoolWords.shift();
        let sixthArray = schoolWords.shift();
        
        var values = firstArray.split(" ");
        var englishWordOne = values[0];
        var frenchWordOne = firstArray.substring(firstArray.indexOf(' ') + 1);
        console.log(englishWordOne);
        console.log(frenchWordOne);
        
        let englishContainerOne = containersEnglish.shift();
        console.log(englishContainerOne);
        let frenchContainerOne = containersFrench.shift();
        console.log(frenchContainerOne);

        document.getElementById(englishContainerOne).textContent = englishWordOne;
        document.getElementById(frenchContainerOne).textContent = frenchWordOne;
        
        var values = secondArray.split(" ");
        var englishWordTwo = values[0];
        var frenchWordTwo = secondArray.substring(secondArray.indexOf(' ') + 1);
        console.log(englishWordTwo);
        console.log(frenchWordTwo);
        
        let englishContainerTwo = containersEnglish.shift();
        console.log(englishContainerTwo);
        let frenchContainerTwo = containersFrench.shift();
        console.log(frenchContainerTwo);

        document.getElementById(englishContainerTwo).textContent = englishWordTwo;
        document.getElementById(frenchContainerTwo).textContent = frenchWordTwo;
        
        var values = thirdArray.split(" ");
        var englishWordThree = values[0];
        var frenchWordThree = thirdArray.substring(thirdArray.indexOf(' ') + 1);
        console.log(englishWordThree);
        console.log(frenchWordThree);
        
        let englishContainerThree = containersEnglish.shift();
        console.log(englishContainerThree);
        let frenchContainerThree = containersFrench.shift();
        console.log(frenchContainerThree);

        document.getElementById(englishContainerThree).textContent = englishWordThree;
        document.getElementById(frenchContainerThree).textContent = frenchWordThree;
        
        var values = forthArray.split(" ");
        var englishWordFour = values[0];
        var frenchWordFour = forthArray.substring(forthArray.indexOf(' ') + 1);
        console.log(englishWordFour);
        console.log(frenchWordFour);
        
        let englishContainerFour = containersEnglish.shift();
        console.log(englishContainerFour);
        let frenchContainerFour = containersFrench.shift();
        console.log(frenchContainerFour);

        document.getElementById(englishContainerFour).textContent = englishWordFour;
        document.getElementById(frenchContainerFour).textContent = frenchWordFour;
        
        var values = fifthArray.split(" ");
        var englishWordFive = values[0];
        var frenchWordFive = fifthArray.substring(fifthArray.indexOf(' ') + 1);
        console.log(englishWordFive);
        console.log(frenchWordFive);
        
        let englishContainerFive = containersEnglish.shift();
        console.log(englishContainerFive);
        let frenchContainerFive = containersFrench.shift();
        console.log(frenchContainerFive);

        document.getElementById(englishContainerFive).textContent = englishWordFive;
        document.getElementById(frenchContainerFive).textContent = frenchWordFive;
        
        var values = sixthArray.split(" ");
        var englishWordSix = values[0];
        var frenchWordSix = sixthArray.substring(sixthArray.indexOf(' ') + 1);
        console.log(englishWordSix);
        console.log(frenchWordSix);
        
        let englishContainerSix = containersEnglish.shift();
        console.log(englishContainerSix);
        let frenchContainerSix = containersFrench.shift();
        console.log(frenchContainerSix);

        document.getElementById(englishContainerSix).textContent = englishWordSix;
        document.getElementById(frenchContainerSix).textContent = frenchWordSix;

}

schoolGame()