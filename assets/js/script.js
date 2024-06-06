

/** code to split array items // 
* https://stackoverflow.com/questions/40784961/get-all-string-in-one-variable-after-space-in-javascript
*/


//global variables of words //
let workWords = ["computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse"]
let outdoorWords = ["Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poilet", "River Rivière", "Lake Lac"]
let shoppingWords = ["Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte" ]
let houseWords = ["Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door, Porte"]
let restaruantWords = ["Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]




let schoolWordsBase = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur"]
let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur"]
let schoolContainersEnglish = ["school-english-word-1", "school-english-word-2", "school-english-word-3", "school-english-word-4", "school-english-word-5", "school-english-word-6"];
let schoolContainersFrench = ["school-french-word-1", "school-french-word-2", "school-french-word-3", "school-french-word-4", "school-french-word-5", "school-french-word-6"];

gameSchool(schoolWords, schoolContainersEnglish, schoolContainersFrench)

//working on creating this function 
function gameSchool (a, b, c) {
        let schoolWords = a;
        shuffle(schoolWords);
        let containersEnglish = b;
        let containersFrench = c;
        shuffle(containersEnglish);
        shuffle(containersFrench);

        //to remove reandomly slected array item 
        let firstArray = schoolWords.shift();
        let secondArray = schoolWords.shift();
        let thirdArray = schoolWords.shift();
        let forthArray = schoolWords.shift();
        let fifthArray = schoolWords.shift();
        let sixthArray = schoolWords.shift();

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

}


//the id of school-english-word-1 is randomised using shuffle. lets find the result and assess that// 

//adding highlighted accent to selected word
function activateAndAssess1 () {
        document.getElementById("school-english-word-1").classList.toggle("selected");

        let idAdd = document.getElementById("school-english-word-1");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;

        return wordOne;       
}
function activateAndAssess2 () {
        document.getElementById("school-french-word-1",).classList.toggle("selected-french");
        

        let idAdd = document.getElementById("school-french-word-1");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}        
function activateAndAssess3 () {
        document.getElementById("school-english-word-2").classList.toggle("selected");
        

        let idAdd = document.getElementById("school-english-word-2");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;

        return wordOne;

}
function activateAndAssess4 () {
        document.getElementById("school-french-word-2",).classList.toggle("selected-french");
        

        let idAdd = document.getElementById("school-french-word-2");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess5 () {
        document.getElementById("school-english-word-3").classList.toggle("selected");
        

        let idAdd = document.getElementById("school-english-word-3");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess6 () {
        document.getElementById("school-french-word-3",).classList.toggle("selected-french");
       
        let idAdd = document.getElementById("school-french-word-3");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess7 () {
        document.getElementById("school-english-word-4").classList.toggle("selected");
       
        let idAdd = document.getElementById("school-english-word-4");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess8 () {
        document.getElementById("school-french-word-4",).classList.toggle("selected-french");
        
        let idAdd = document.getElementById("school-french-word-4");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess9 () {
        document.getElementById("school-english-word-5").classList.toggle("selected");
        
        let idAdd = document.getElementById("school-english-word-5");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;


        return wordOne;
}
function activateAndAssess10 () {
        document.getElementById("school-french-word-5",).classList.toggle("selected-french");
        

        let idAdd = document.getElementById("school-french-word-5");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}
function activateAndAssess11 () {
        document.getElementById("school-english-word-6").classList.toggle("selected");
       

        let idAdd = document.getElementById("school-english-word-6");
        idAdd.id = ("firstSelection");
        var wordOne = idAdd.innerHTML;

        return wordOne;
}
function activateAndAssess12 () {
        document.getElementById("school-french-word-6",).classList.toggle("selected-french");
        

        let idAdd = document.getElementById("school-french-word-6");
        idAdd.id = ("secondSelection");
        var wordTwo = idAdd.innerHTML;

        return wordTwo;
}



document.getElementById("school-french-word-1").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-2").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-3").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-4").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-5").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-6").addEventListener("click", EnglishFrenchTest);

/** function to assess if two selected items are correct or incorrect
 */
function EnglishFrenchTest () {
        //first selected word
        let first = document.getElementById("firstSelection");
        let firstParameter = first.innerHTML;
        //second selected word
        let second = document.getElementById("secondSelection");
        let secondParameter = second.innerHTML;
        //to concate the two words together as they were in teh origional string
        let stringTest = firstParameter+(" ")+secondParameter;
        
        let result = schoolWordsBase.includes(stringTest);
        // to test if user input is correct
        if (result === true) {
                /**code used to return the html document to origional state by esablishing which two containers were
                 * selected and returning them to origional
                */
                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                document.getElementById("firstSelection").classList.add("correct");
                document.getElementById("secondSelection").classList.add("correct");
                
                let first = document.getElementById("firstSelection");
                let raw = first.outerHTML;
                raw.toString;
                let rawPlus = "`" + raw + "`";
                let numberOne = numberFinder(rawPlus);

                let halfNumberOne = numberOne / 2;
                let numberOneResult = halfNumberOne + 0.5;
                numberOne.toString;
                //numberOneResult is the number of the container that the user slected and adding it to "school-english-word"
                let stringToInsert = "school-english-word-"+numberOneResult;
                let resultOne = stringToInsert.replace(/\s/g, "");
                let idAddEnglish = document.getElementById("firstSelection");
                idAddEnglish.id = (resultOne);


                let second = document.getElementById("secondSelection");
                let rawFrench = second.outerHTML;
                rawFrench.toString;
                let rawFrenchPlus = "`" + rawFrench + "`";

                let numberTwo = numberFinder(rawFrenchPlus);
                //numberTwoResult is the number of the container that the user slected and adding it to "school-english-word"
                let numberTwoResult = numberTwo / 2;
                numberTwo.toString;
                let stringToInsertFrench = "school-french-word-"+numberTwoResult;

                let resultTwo = stringToInsertFrench.replace(/\s/g, "");
                let idAddFrench = document.getElementById("secondSelection");
                idAddFrench.id = (resultTwo);

        } else {

                /**if user input was incorrect the correct class in not applied and the html is 
                 * reutned to origional to wait the next input */
                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                document.getElementById("firstSelection").classList.add("incorrect");
                document.getElementById("secondSelection").classList.add("incorrect");


                let first = document.getElementById("firstSelection");
                let raw = first.outerHTML;
                raw.toString;
                let rawPlus = "`" + raw + "`";
                let numberOne = numberFinder(rawPlus);

                let halfNumberOne = numberOne / 2;
                let numberOneResult = halfNumberOne + 0.5;
                numberOne.toString;
   
                let stringToInsert = "school-english-word-"+numberOneResult;
                let resultOne = stringToInsert.replace(/\s/g, "");
                let idAddEnglish = document.getElementById("firstSelection");
                idAddEnglish.id = (resultOne);


                let second = document.getElementById("secondSelection");
                let rawFrench = second.outerHTML;
                rawFrench.toString;
                let rawFrenchPlus = "`" + rawFrench + "`";

                let numberTwo = numberFinder(rawFrenchPlus);

                let numberTwoResult = numberTwo / 2;
                numberTwo.toString;
                let stringToInsertFrench = "school-french-word-"+numberTwoResult;

                let resultTwo = stringToInsertFrench.replace(/\s/g, "");
                let idAddFrench = document.getElementById("secondSelection");
                idAddFrench.id = (resultTwo);

        }

}

/**similar to the above code the following functions are used if the user selects the french word first
 * it will apply the same test. 
 */

document.getElementById("school-english-word-1").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-2").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-3").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-4").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-5").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-6").addEventListener("click", FrenchEnglishTest);

function FrenchEnglishTest () {
        let first = document.getElementById("firstSelection");
        let firstParameter = first.innerHTML;

        let second = document.getElementById("secondSelection");
        let secondParameter = second.innerHTML;

        let stringTest = firstParameter+(" ")+secondParameter;
        
        let result = schoolWordsBase.includes(stringTest);

        if (result === true) {

                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                document.getElementById("firstSelection").classList.add("correct");
                document.getElementById("secondSelection").classList.add("correct");
                
                let first = document.getElementById("firstSelection");
                let raw = first.outerHTML;
                raw.toString;
                let rawPlus = "`" + raw + "`";
                let numberOne = numberFinder(rawPlus);

                let halfNumberOne = numberOne / 2;
                let numberOneResult = halfNumberOne + 0.5;
                numberOne.toString;
   
                let stringToInsert = "school-english-word-"+numberOneResult;
                let resultOne = stringToInsert.replace(/\s/g, "");
                let idAddEnglish = document.getElementById("firstSelection");
                idAddEnglish.id = (resultOne);


                let second = document.getElementById("secondSelection");
                let rawFrench = second.outerHTML;
                rawFrench.toString;
                let rawFrenchPlus = "`" + rawFrench + "`";

                let numberTwo = numberFinder(rawFrenchPlus);

                let numberTwoResult = numberTwo / 2;
                numberTwo.toString;
                let stringToInsertFrench = "school-french-word-"+numberTwoResult;

                let resultTwo = stringToInsertFrench.replace(/\s/g, "");
                let idAddFrench = document.getElementById("secondSelection");
                idAddFrench.id = (resultTwo);





        } else {

                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                document.getElementById("firstSelection").classList.add("incorrect");
                document.getElementById("secondSelection").classList.add("incorrect");


                let first = document.getElementById("firstSelection");
                let raw = first.outerHTML;
                raw.toString;
                let rawPlus = "`" + raw + "`";
                let numberOne = numberFinder(rawPlus);

                let halfNumberOne = numberOne / 2;
                let numberOneResult = halfNumberOne + 0.5;
                numberOne.toString;
   
                let stringToInsert = "school-english-word-"+numberOneResult;
                let resultOne = stringToInsert.replace(/\s/g, "");
                let idAddEnglish = document.getElementById("firstSelection");
                idAddEnglish.id = (resultOne);


                let second = document.getElementById("secondSelection");
                let rawFrench = second.outerHTML;
                rawFrench.toString;
                let rawFrenchPlus = "`" + rawFrench + "`";

                let numberTwo = numberFinder(rawFrenchPlus);

                let numberTwoResult = numberTwo / 2;
                numberTwo.toString;
                let stringToInsertFrench = "school-french-word-"+numberTwoResult;

                let resultTwo = stringToInsertFrench.replace(/\s/g, "");
                let idAddFrench = document.getElementById("secondSelection");
                idAddFrench.id = (resultTwo);

        }

}












//https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/

function numberFinder(a) {
        let numbers = "";
        for (let i = 0; i < a.length; i++) {
            if (!isNaN(a[i])) {
                numbers += a[i];
            }
        }
        return numbers;
    }
    
function addingNumbersToString (a, b) {
        let subject = a;
        let raw = subject.outerHTML;
        raw.toString;
        let rawString = "`" + rawFrench + "`";
        let number = numberFinder(rawString);
        number.toString;
        let stringToInsert = b+number;
        let result = stringToInsert.replace(/\s/g, "");
        return result;
}

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



