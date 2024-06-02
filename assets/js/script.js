
// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them


let gameTypeWork = document.getElementById("Work")
let gameTypeOutdoor = document.getElementById("outdoors")
let gameTypeShopping = document.getElementById("shopping")
let gameTypeHouse = document.getElementById("house")
let gameTypeRestaurant = document.getElementById("restaurant")

//global variables of words //
let workWords = ["computer Ordinateur", "Keyboard Clavier", "Meeting Réunion", "Office Bureau", "Colleague Collègue", "Stapler Agrafeuse"]
let outdoorWords = ["Tree Arbre", "Cow Vache", "Duck Canard", "Sheep Mouton", "Chicken Poilet", "River Rivière", "Lake Lac"]
let shoppingWords = ["Shop Magasin", "Clothes Vêtements", "Food Nourriture", "Cost Coût", "Money Argent", "Card Carte" ]
let houseWords = ["Kitchen Cuisine", "Carpet Tapis", "Fridge Frigo", "Freezer Congélateur", "Cupboard Placard", "Door, Porte"]
let restaruantWords = ["Bill Addition", "Starter Entrée", "Dish Plat", "Desert Dessert", "Coffee Café", "Tea Thé"]

/**to random the words from the schoolWords array // 
     * //code to split array items // 
     * https://stackoverflow.com/questions/40784961/get-all-
     * string-in-one-variable-after-space-in-javascript */


let gameTypeSchool = document.getElementById("school")

gameTypeSchool.addEventListener('click', function() {
        let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Proteactor Rapporteur"]
        let randomWord = (schoolWords[(Math.floor(Math.random() * schoolWords.length))]);
        var values = randomWord.split(" ");
        var englishWord = values[0];
        var frenchWord = randomWord.substring(randomWord.indexOf(' ') + 1);
        console.log(englishWord);
        console.log(frenchWord);
})
