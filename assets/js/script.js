//words used for the game
let schoolWordsBase = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur", "computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse", "Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poulet", "River Rivière", "Lake Lac", "Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte", "Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door Porte", "Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]
let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur", "computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse", "Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poulet", "River Rivière", "Lake Lac", "Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte", "Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door Porte", "Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]
//containers used to put the words into 
let schoolContainersEnglish = ["school-english-word-1", "school-english-word-2", "school-english-word-3", "school-english-word-4", "school-english-word-5", "school-english-word-6"];
let schoolContainersFrench = ["school-french-word-1", "school-french-word-2", "school-french-word-3", "school-french-word-4", "school-french-word-5", "school-french-word-6"];

/**gameSchool is the function that runs on game.html it randomises the words and the 
 * containers and put the words into the containers */
function gameSchool (a, b, c) {
        let schoolWords = a;
        //the shuffle function is detailed below. It uses the Fisher-Yates shuffle.
        shuffle(schoolWords);
        let containersEnglish = b;
        let containersFrench = c;
        shuffle(containersEnglish);
        shuffle(containersFrench);

        //to remove reandomly slected array item from shuffled array
        let firstArray = schoolWords.shift();
        let secondArray = schoolWords.shift();
        let thirdArray = schoolWords.shift();
        let forthArray = schoolWords.shift();
        let fifthArray = schoolWords.shift();
        let sixthArray = schoolWords.shift();

        //splits the two words in the string one being french and one english
        var values = firstArray.split(" ");
        var englishWordOne = values[0];
        var frenchWordOne = firstArray.substring(firstArray.indexOf(' ') + 1);
        
        //to select random container 
        let englishContainerOne = containersEnglish.shift();
        let frenchContainerOne = containersFrench.shift();

        //to send random word to random container
        document.getElementById(englishContainerOne).textContent = englishWordOne;
        document.getElementById(frenchContainerOne).textContent = frenchWordOne;
        
        //repeat of the above code for each container
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

/** The following 12 functions add the selected class to the container
 * the class is used to denote to the user there selection 
 * it also adds the ID's of firstSelection and secondSelection respectively
 * The below ID's are used later to identify if correct or incorrect */

//adding highlighted accent to selected word
function activateAndAssess1 () {
        document.getElementById("school-english-word-1").classList.add("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");


        let idAdd = document.getElementById("school-english-word-1");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;

      
}
function activateAndAssess2 () {
        document.getElementById("school-french-word-1",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected");
        document.getElementById("school-french-word-3").classList.remove("selected");
        document.getElementById("school-french-word-4").classList.remove("selected");
        document.getElementById("school-french-word-5").classList.remove("selected");
        document.getElementById("school-french-word-6").classList.remove("selected");
        

        let idAdd = document.getElementById("school-french-word-1");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}        
function activateAndAssess3 () {
        document.getElementById("school-english-word-2").classList.add("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");
        

        let idAdd = document.getElementById("school-english-word-2");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;


}
function activateAndAssess4 () {
        document.getElementById("school-french-word-2",).classList.toggle("selected-french");
        document.getElementById("school-french-word-1").classList.remove("selected");
        document.getElementById("school-french-word-3").classList.remove("selected");
        document.getElementById("school-french-word-4").classList.remove("selected");
        document.getElementById("school-french-word-5").classList.remove("selected");
        document.getElementById("school-french-word-6").classList.remove("selected");
        

        let idAdd = document.getElementById("school-french-word-2");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}
function activateAndAssess5 () {
        document.getElementById("school-english-word-3").classList.add("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");
        

        let idAdd = document.getElementById("school-english-word-3");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;

}
function activateAndAssess6 () {
        document.getElementById("school-french-word-3",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected");
        document.getElementById("school-french-word-1").classList.remove("selected");
        document.getElementById("school-french-word-4").classList.remove("selected");
        document.getElementById("school-french-word-5").classList.remove("selected");
        document.getElementById("school-french-word-6").classList.remove("selected");
       
        let idAdd = document.getElementById("school-french-word-3");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}
function activateAndAssess7 () {
        document.getElementById("school-english-word-4").classList.add("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");
       
        let idAdd = document.getElementById("school-english-word-4");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;

}
function activateAndAssess8 () {
        document.getElementById("school-french-word-4",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected");
        document.getElementById("school-french-word-3").classList.remove("selected");
        document.getElementById("school-french-word-1").classList.remove("selected");
        document.getElementById("school-french-word-5").classList.remove("selected");
        document.getElementById("school-french-word-6").classList.remove("selected");
        
        let idAdd = document.getElementById("school-french-word-4");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}
function activateAndAssess9 () {
        document.getElementById("school-english-word-5").classList.add("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
        document.getElementById("school-english-word-6").classList.remove("selected");
        
        let idAdd = document.getElementById("school-english-word-5");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;

}
function activateAndAssess10 () {
        document.getElementById("school-french-word-5",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected");
        document.getElementById("school-french-word-3").classList.remove("selected");
        document.getElementById("school-french-word-4").classList.remove("selected");
        document.getElementById("school-french-word-1").classList.remove("selected");
        document.getElementById("school-french-word-6").classList.remove("selected");
        

        let idAdd = document.getElementById("school-french-word-5");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}
function activateAndAssess11 () {
        document.getElementById("school-english-word-6").classList.add("selected");
        document.getElementById("school-english-word-2").classList.remove("selected");
        document.getElementById("school-english-word-3").classList.remove("selected");
        document.getElementById("school-english-word-4").classList.remove("selected");
        document.getElementById("school-english-word-5").classList.remove("selected");
        document.getElementById("school-english-word-1").classList.remove("selected");
       

        let idAdd = document.getElementById("school-english-word-6");
        idAdd.id = ("firstSelection");
        idAdd.innerHTML;

}
function activateAndAssess12 () {
        document.getElementById("school-french-word-6",).classList.toggle("selected-french");
        document.getElementById("school-french-word-2").classList.remove("selected");
        document.getElementById("school-french-word-3").classList.remove("selected");
        document.getElementById("school-french-word-4").classList.remove("selected");
        document.getElementById("school-french-word-5").classList.remove("selected");
        document.getElementById("school-french-word-1").classList.remove("selected");
        

        let idAdd = document.getElementById("school-french-word-6");
        idAdd.id = ("secondSelection");
        idAdd.innerHTML;

}


//runs a function called EnglishFrenchTest on click and assess if correct
document.getElementById("school-french-word-1").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-2").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-3").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-4").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-5").addEventListener("click", EnglishFrenchTest);
document.getElementById("school-french-word-6").addEventListener("click", EnglishFrenchTest);

/** function to assess if two selected items are correct or incorrect
 * uses the previously mentioned firstSelection and secondSelection ID's 
 * that were generated by the user input*/
function EnglishFrenchTest () {
        //first selected word
        let first = document.getElementById("firstSelection");
        let firstParameter = first.innerHTML;
        //second selected word
        let second = document.getElementById("secondSelection");
        let secondParameter = second.innerHTML;
        //to concate the two words together as they were in the origional string
        let stringTest = firstParameter+(" ")+secondParameter;
        
        let result = schoolWordsBase.includes(stringTest);
        // to test if user input is correct
        if (result === true) {
                /**code used to return the html document to origional state by esablishing which two containers were
                 * selected and returning them to origional
                */
                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                //the correct class denoted to the user that the pair are correct
                document.getElementById("firstSelection").classList.add("correct");
                document.getElementById("secondSelection").classList.add("correct");
                
                /**The following piece of code identifys which item was selected
                 * (as it was randomly assigned) and uses this to return the origional ID
                 * allowing the next selection to run*/
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

                incrimentScore(document.getElementById("score-school"));

                modulusOperation ()
                

        } else {

                /**if user input was incorrect the correct class in not applied and the html is 
                 * reutned to origional to wait the next input */
                document.getElementById("firstSelection").classList.remove("selected");
                document.getElementById("secondSelection").classList.remove("selected-french");

                //incorrect class is an animation the only remains red for 1.5s
                document.getElementById("firstSelection").classList.add("incorrect");
                document.getElementById("secondSelection").classList.add("incorrect");

                /**The following piece of code identifys which item was selected
                 * (as it was randomly assigned) and uses this to return the origional ID
                 * allowing the next selection to run*/
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

                decrimentLives(document.getElementById("lives-school"));

                identifyLives()

        }
}


//runs a function called FrenchEnglishTest on click and assess if correct
document.getElementById("school-english-word-1").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-2").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-3").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-4").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-5").addEventListener("click", FrenchEnglishTest);
document.getElementById("school-english-word-6").addEventListener("click", FrenchEnglishTest);

/**similar to the above code the following functions are used if the user selects the french word first
 * it will apply the same test. This was done to enhance user experience. In early testing it was clear 
 * that often teh user will selected the french word first. 
 */
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

                incrimentScore(document.getElementById("score-school"));

                modulusOperation ()

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

                decrimentLives(document.getElementById("lives-school"));

                identifyLives();

        }
}

/**identifyLives is a function used to assess the number of lives remaining  
 * identifyLives also provides the user with the Game Over alert and resets the score
*/
function identifyLives () {
        a = document.getElementById("lives-school");
        b = a.innerHTML;
        c = +b;
        if (c < 1) {
                alert("Game Over! Try Again!")
                gameReset();
                document.getElementById("lives-school").textContent = 3;
                document.getElementById("score-school").textContent = 0;
                removeClass(document.getElementById("school-english-word-1"));
                removeClass(document.getElementById("school-english-word-2"));
                removeClass(document.getElementById("school-english-word-3"));
                removeClass(document.getElementById("school-english-word-4"));
                removeClass(document.getElementById("school-english-word-5"));
                removeClass(document.getElementById("school-english-word-6"));
                removeClass(document.getElementById("school-french-word-1"));
                removeClass(document.getElementById("school-french-word-2"));
                removeClass(document.getElementById("school-french-word-3"));
                removeClass(document.getElementById("school-french-word-4"));
                removeClass(document.getElementById("school-french-word-5"));
                removeClass(document.getElementById("school-french-word-6"));

        }
}

/**decrimentLives is a function called if the user inputs and incorrect answer
 * it takes the value of the lives and reduces it by 1
 */
function decrimentLives (a) {
        let b = a.innerHTML;
        let bNum = +b;
        let c = bNum - 1;
        c.toString
        document.getElementById("lives-school").textContent = c;
}

/**incrimentScore is a function called if the user inputs a correct answer
 * it increases the value of the score by 1 
 */
function incrimentScore (a) {
        let b = a.innerHTML;
        let bNum = +b;
        let c = bNum + 1;
        c.toString
        document.getElementById("score-school").textContent = c;
}

/** numberFinder is a function used to identify numbers contained within a string 
 * numberFinder was used from:
 * 
 * https://www.geeksforgeeks.org/extract-a-number-from-a-string-using-javascript/
 */
function numberFinder(a) {
        let numbers = "";
        for (let i = 0; i < a.length; i++) {
            if (!isNaN(a[i])) {
                numbers += a[i];
            }
        }
        return numbers;
    }

/** shuffle is a function used to shuffle the words in both the array of words and the containers
 * It is known as the The Fisher-Yates shuffle and was found and reserched on the following two sites:
 * 
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


/**GameReset is a function used to reset the game once the number of lives reaches 0
 * or 6 correct answers have been provided. 
 */
function gameReset () {

        let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Protractor Rapporteur", "computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse", "Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poulet", "River Rivière", "Lake Lac", "Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte", "Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door Porte", "Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]
        shuffle(schoolWords);
        let containersEnglish = ["school-english-word-1", "school-english-word-2", "school-english-word-3", "school-english-word-4", "school-english-word-5", "school-english-word-6"];
        let containersFrench = ["school-french-word-1", "school-french-word-2", "school-french-word-3", "school-french-word-4", "school-french-word-5", "school-french-word-6"];
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

/**function to remove the correct class */
function removeClass (a) {
         a.classList.remove("correct");      
}

/**modulusOperation is a function called when the game board has all 
 * 6 correct answers. It words by calling game reset if the score is divisible by 6
 * and produces no remiander 
 */
function modulusOperation () {
        a = document.getElementById("score-school").innerHTML;
        b = a % 6
        if (b === 0) {
                gameReset();
                removeClass(document.getElementById("school-english-word-1"));
                removeClass(document.getElementById("school-english-word-2"));
                removeClass(document.getElementById("school-english-word-3"));
                removeClass(document.getElementById("school-english-word-4"));
                removeClass(document.getElementById("school-english-word-5"));
                removeClass(document.getElementById("school-english-word-6"));
                removeClass(document.getElementById("school-french-word-1"));
                removeClass(document.getElementById("school-french-word-2"));
                removeClass(document.getElementById("school-french-word-3"));
                removeClass(document.getElementById("school-french-word-4"));
                removeClass(document.getElementById("school-french-word-5"));
                removeClass(document.getElementById("school-french-word-6"));
        }
}