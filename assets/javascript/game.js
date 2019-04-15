    // Global Variables
   var userScore = 0;
   var roundNumber = 6;
   var numGuesses = 0;
   var blankSpaces = [];
   var answersIndex = 1;   
   var charGuess ='';
   var currentWord = 1;

    // Words to Guess
    var answers = [
        {
            word: "First Test Word",
            definition: "First Test Definition",
            labOrRUM: "First lab/field test", 
            hint: "First Test Hint"
        },
        {
            word: "Second Test Word",
            definition: "Second Test Definition",
            labOrRUM: "Second lab/field test", 
            hint: "Second Test Hint"
        }
    ]

    function initializeWord(answersIndex){
        var metricNameLength = answers[answersIndex].word.length;
        for (var j = 0; j < metricNameLength; j++) {
                if (answers[answersIndex].word[j] === ' '){
                    blankSpaces.push('    -    ');
                }
                else if (answers[answersIndex].word[j] != ' ') {
                    blankSpaces.push('__');
                }
            console.log(answers[answersIndex].word[j]);
            }
        document.getElementById("answerSpaces").innerHTML = blankSpaces;
        document.getElementById("definition").innerHTML = "Definition:  " + answers[answersIndex].definition;
        document.getElementById("labOrField").innerHTML = "Lab or Field Metric:  " + answers[answersIndex].labOrRUM;
        document.getElementById("hint").innerHTML = "Hint:  " + answers[answersIndex].hint;
        //document.getElementById("answerImage").innerHTML = "<img src='/assets/images/cello.jpg' width='16' height='16'>"";
    }

    initializeWord(1);

    function checkGuess(charGuess){
           console.log(charGuess + "Howdy");
           var metricNameLength = answers[answersIndex].word.length;
           for (var j = 0; j < metricNameLength; j++) {
                if (answers[answersIndex].word[j] === charGuess){
                    blankSpaces.push(charGuess);
                }
                else if (answers[answersIndex].word[j] != charGuess) {
                    blankSpaces.push('__');
                }
            console.log(answers[answersIndex].word[j]);
            }
     }

     //for (var i=0; i<3; i++){
        //Function to start with empty spaces and hint information for a new round / word.
        
        //Function to take the click of a button and see whether or not it is within the word.
        for (var i=0; i<3; i++){
            //charGuess = onclick
        checkGuess(charGuess);   
        }
     //}



var x = document.getElementByID("definition");
document.getElementById("definition").innerHTML = "Paragraph changed!";

</script>