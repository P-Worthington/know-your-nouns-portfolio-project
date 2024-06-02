



function selectWordsForSchool () {
    let schoolWords = ["Pen Stylo", "Pencil Crayon", "Calculator Calculatrice", "Book Livre", "Dictionary Dictionnaire", "Student Étudiante", "Teacher Professeur", "Math Mathématiques", "English Anglais", "History Histoire", "Science Science", "Homework Devoirs", "Pencilcase Trouse", "Eraser Gomme", "Proteactor Rapporteur"]
    
    //to random the words from the schoolWords array // //code to split array items // https://stackoverflow.com/questions/40784961/get-all-string-in-one-variable-after-space-in-javascript //
      function randomiseWords () {
        let randomWord = (schoolWords[(Math.floor(Math.random() * schoolWords.length))]);
        var values = randomWord.split(" ");
        var englishWord = values[0];
        var frenchWord = randomWord.substring(randomWord.indexOf(' ') + 1);
        console.log(englishWord);
        console.log(frenchWord);
      }
    
      //this loops the randomiseWord function 6 times to get the 6 english and 6 french words //
      for (i=0;i<=6;i++){
         randomiseWords();
      }
    

      
















}

function displayWords () {

}

function identifyCorrect () {

}

function identifyIncorrect () {

}

function incrimentCorrect () {

}

function incrimentIncorrect () {

}

function gameComplete () {

}