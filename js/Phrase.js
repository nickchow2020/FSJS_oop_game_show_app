/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
         this.phrase = phrase.toLowerCase();//This is the actual phrase the Phrase object is representing need to conver to all lowerCase;
     }

    /**
     * method that is going to append phrase letter into HTML
     * append the correct class to each letter.
     */
     addPhraseToDisplay(){
        const randomPhrase = this.phrase;
        const letters = randomPhrase.split("");
        for(let i = 0; i < letters.length; i ++){
            const li = document.createElement("li");
            if(letters[i] === " "){
                li.textContent = " ";
                li.classList.add("space")
            }else{
                li.textContent = letters[i];
                li.classList.add("hide","letter", letters[i]);
            }
            document.querySelector("#phrase ul").appendChild(li);
        }
     }
    /**
     * to check the letter is match the phrase lettter,if match return true,if no return false.
     * @return {boolean};
     */
     checkLetter(button){
         const letter = button.textContent;
         const correntPhrase = this.phrase;
         if(correntPhrase.indexOf(letter) > -1){
            return true;
         }else{
            if(button.classList.contains("wrong")){
                return true;
            }
            return false;
         }
         
     }

    /**
     * show the corrent letter to the screem,
     * by add class show
     */
     showMatchedLetter(letter){
         const allLetters = document.querySelectorAll(".letter");
        for(let i = 0 ; i < allLetters.length; i ++){
            const theLetter = allLetters[i].textContent;
            if(theLetter === letter){
                allLetters[i].classList.replace("hide","show");
            }
        }
     }
 }