
const easycountry =[ "FRANCE","ROME","PERU","UNITEDSTATES" ,"GREECE","INDIA","EGYPT", "CHINA" ,"CUBA","JORDAN","ENGLAND","MEXICO" ,
                     "BRAZIL","JAPAN","POLAND","CANADA","PORTUGAL","RUSSIA","MALAYSIA","THAILAND","SPAIN","GERMANY","UKRAINE",
                      "ITALY" , "TURKEY", "IRELAND" ,"BAHAMAS","CHILE","ALASKA"]; 

const mediumcountry =["NETHERLANDS","UNITEDKINGDOM" ,"CROATIA","SOMALIA","TUVALU","SUDAN","SRILANKA","NEPAL","BHUTAN","MYANMAR",
                      "PAKISTAN","NIGERIA","BANGLADESH","SWEDEN","SWITZERLAND","THAILAND","AUSTRIA","MACAU","HUNGARY","SINGAPORE",
                      "KOREA","BELGIUM","BELARUS","ANGOLA","AZERBAIJAN","LIBYA","PHILIPPINES","CAMBODIA"];

const hardcountry =["GRENADINES","LIECHTENSTEIN","DOMINICA" ,"TIMOR-LESTE","DJIBOUTI","SAO TOME","SIERRA LEONE","GINE-BISSAU",
                   "GUINEA","TONGA","MAURITANIA","COMOROS","LIBERIA","KIRIBATI","NAURU","BENIN","MALDOVA","PALAU","CZECHREPUBLIC","ECUADOR",
                  "ELSALVADOR","ERITREA","ESTONIA","KYRGYZSTAN","LATVIA","LESOTHO","MOZAMBIQUE","RWANDA","TAJIKISTAN","SURINAME"];

const wordText = document.querySelector(".word");  //Accessing the p class which displays the scrambled word
const selectedLevel =document.querySelector(".selectedLevel");
const winRule  = document.querySelector(".winRule");  //Determines the rule for the user to win according to the level

let currentLevel = "";            //Declaring result and currentlevel as empty so dat it can be redeclared and value can be used to store userinput
let result ="";                   //whether the userinput is correct or not

let sucess = 0;                  //How many the user got correct     
let levelSucess = 0;             // To know how many questions user need to get correct  in particular level.


function game() {                 //initialising a function:game and using math.randomm formula 
  if(currentLevel == "EASY"){
    result = easycountry[Math.floor(Math.random() * easycountry.length)];    //looping to find the user input level so that it can display random word from that particular array
    levelSucess = 5;              //determines how many user needs to get correct straight in a row
  
  }
  else if(currentLevel == "MEDIUM"){
    result = mediumcountry[Math.floor(Math.random() * mediumcountry.length)];
    levelSucess = 11;
      
  }
  else if(currentLevel == "HARD")
  {
    result = hardcountry[Math.floor(Math.random() * hardcountry.length)];
    levelSucess = 23;
  
  }
  
  const scrambled = result.split('').sort(function(){return 0.3 -Math.random()}).join('');//after getting the random word(result) it would split 
  //the word into separate characters in an array .They would be sorted  and  joined to form single string  
  console.log(scrambled);
  console.log(result);  
  wordText.innerHTML = scrambled;
  }
  game();


  function buttonClick(event){                  //button click function to know exactly which level user chose and to display words from that particular array.
    let text = event.target.innerHTML;          //event.target gives us access to the DOM element the user clicked.
    currentLevel = text;                        //console.log(text);//console.log(currentLevel);
    if(currentLevel == "EASY"){                         
      winRule.innerHTML = "Get 6 right in a row to Win";
    }
    else if(currentLevel == "MEDIUM"){
      winRule.innerHTML = "Get 12 right in a row to Win";
    }
    else if(currentLevel == "HARD"){
      winRule.innerHTML = "Get 24 right in a row to Win";
    }
  }

// Submit function to know whether the userinputs are correct or wrong 
  function submit(){
    if(currentLevel == ""){                      //When the user did not select any level and clicks submit it would pop up that they need to selct first inorder for the gae to start.
      alert("Please Select Level First");
      return;
    }
  let userinput = document.getElementById("userinput").value; //Accessing the userinput to know what the user has given in the textbox when user clicked on the submit button
   //console.log("userinput")
    if(userinput == ''){                 
     alert("Uh -Oh!! Its Empty..Please enter the word");      //if the user-input is empty it would pop up a message 
    }
    else if(userinput.toLowerCase() == result.toLowerCase()){   //userinput would be considered even its in both lower aswell as uppercase
            sucess = sucess+1;
            if(sucess >levelSucess){
            alert("Congratulationsss!!!You Won!!!!"  );                     
            sucess = 0 ;
            } 
            else{
            alert("BINGO!!...You got it Right!!!Time for Next One!!." + "Your score is "+ sucess);
            }
           game();
            }
   else {                                               
    sucess=0;       //the score board sets back to 0  once the user answers a question wrong and game starts again.           
    alert("Hmm.. Looks like "+ userinput.toUpperCase() + "  is Wrong...You loose!!");   //highlighted in uppercase so dat user can identify what exactly he typed. 
   }
  
   document.getElementById("userinput").value = "";      // to clear the user input textbox after comparisons/validations
  }


   //Accessing the  level buttons..

    const easyBtn = document.getElementById("easybutton");        
    const mediumBtn = document.getElementById("mediumbutton");
    const hardBtn = document.querySelector(".hard");

   //Accessing background image as it needs to be changed for all the three levels 
    const bgImg = document.querySelector("background");


    easyBtn.addEventListener("click" ,buttonClick);                //calling buttonClick func to know which level user has selected
    easyBtn.addEventListener("click" ,function onClick(event){     
    document.getElementById("chooseLevel").style.display = "none"; //once the user has choosen level..the h2 tag display is hidden to display the scrambled word
      mediumBtn.disabled = true;  
      hardBtn.disabled =true;
    document.body.style.backgroundImage ="url\('easy2.png')"});
                       

   mediumBtn.addEventListener("click" ,buttonClick);
   mediumBtn.addEventListener("click" ,function onClick(event){
    easyBtn.disabled = true;
    hardBtn.disabled = true;
   document.getElementById("chooseLevel").style.display = "none";
   document.body.style.backgroundImage ="url\('medium.png')"});


    hardBtn.addEventListener("click" ,buttonClick);
    hardBtn.addEventListener("click",function onClick(event){
      easyBtn.disabled=true;
      mediumBtn.disabled =true;
    document.getElementById("chooseLevel").style.display = "none";
    document.body.style.backgroundImage ="url\('hard.png')"});
      
  //Added eventlistener to 3 levels so that once userinputs their desired level the game function would run and words would be displayed
   
    easyBtn.addEventListener("click" ,game);             
    mediumBtn.addEventListener("click" ,game);           
    hardBtn.addEventListener("click" ,game);

   //accessing the submit button and added eventlistener click so dat submit function is called to validate the userinput

   const submitBtn =document.querySelector(".Submit");   
   submitBtn.addEventListener("click" ,submit);           
   
  //Accessing the refresh button to change the scrambled word,score/sucess comes off to zero

   const refreshBtn =document.querySelector(".Refresh");   
   refreshBtn.addEventListener("click" ,game);
   refreshBtn.addEventListener("click" ,function onClick(event){        
   sucess = 0});

  //Accessing the reset button and added a function so that when user clicks the button the page would reset
   
   let resetBtn = document.querySelector(".Reset")                    
   resetBtn.addEventListener("click" ,function onClick(event){         
   document.location.reload()});
  

   //Manipulating submit button as same as enter button on keyboard.The user can enter his answer and click on ENTER on keyboard insted of submit button every time   
   const input = document.getElementById("userinput");        //accessing the answerbox with "id " and storing in a variable
   input.addEventListener("keypress", function(event) {      //adding an event "keypress" so that when user clicks "enter" button
   if (event.key === "Enter") {
    event.preventDefault();                                  //cancelling the default action if needed..in dis case its submit button click
    document.getElementById("enter").click();                //accesing submit button id:"enter" and calling the click function so that once the user enters the answer and can click enter as submitting.
  }
});