//The game is between a a computer and a player.The screen displays the jumbled world
// and  the player should guess the correct word.
//If the user is able to type the correct word the message should be displayed as "Dat was correct"
//If the user did not attempt correctly it should display(may be  a window alert)..."Good try but u missed..try again"
//It should two have 2 buttons 1.submit 2.reset
//If the functionality works then would go with other types likes presidents or any other famous places

//Declaring array of country names
const country =["ROME", "INDIA", "UNITEDSTATES", "FRANCE" , "GREATBRITAIN" , "ITALY" ,"TUVALU", "CHINA" ,"CANADA" ,"IRELAND" ];
 

const wordText = document.querySelector(".word");  //accessing the p class which displays the scrambled word
const inputBox = document.querySelector("input")   //accessing the input field box
const submitBtn =document.querySelector(".Submit");
const resetBtn=document.querySelector(".Reset");   //accessing the reset button from html


function game() {                                                 //initialising a function game and using math.randomm formula 
     const result = country[Math.floor(Math.random() * country.length)]; //to generate a random word from the array list.
     const scrambled =result.split('').sort(function(){return 0.3 -Math.random()}).join('');     
     console.log(result);  
    console.log(scrambled); 
    wordText.innerHTML = scrambled;
    
  }
  game();


resetBtn.addEventListener("click" ,game );  