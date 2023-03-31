
const easycountry =[ "FRANCE","ROME","PERU","UNITEDSTATES" ,"GREECE","INDIA","EGYPT", "CHINA" ,"CUBA","JORDAN","ENGLAND","MEXICO" ,
                     "BRAZIL","JAPAN","POLAND","CANADA","PORTUGAL","RUSSIA","MALAYSIA","THAILAND","ALASKA","SPAIN","GERMANY","UKRAINE",
                      "ITALY" , "TURKEY", "IRELAND" ,"BAHAMAS","CHILE","NEPAL"]; 

const mediumcountry =["NETHERLANDS", "HONGKONG","UNITEDKINGDOM" ,"CROATIA","SOMALIA","TUVALU","SUDAN","SRILANKA","NEPAL","BHUTAN","MYANMAR",
                      "PAKISTAN","NIGERIA","BANGLADESH","SWEDEN","SWITZERLAND","SWEDEN","THAILAND","AUSTRIA","MACAU","HUNGARY","SINGAPORE",
                      "KOREA","BELGIUM","BELARUS","ANGOLA","AZERBAIJAN","LIBYA","PHILIPPINES","CAMBODIA"];

const hardcountry =["GRENADINES","LIECHTENSTEIN","DOMINICA" ,"TIMOR-LESTE","DJIBOUTI","SAO TOME","SIERRA LEONE","GINE-BISSAU",
                   "GUINEA","TONGA","MAURITANIA","COMOROS","LIBERIA","KIRIBATI","NAURU","BENIN","MALDOVA","PALAU","CZECHREPUBLIC","ECUADOR",
                  "ELSALVADOR","ERITREA","ESTONIA","KYRGYZSTAN","LATVIA","LESOTHO","MOZAMBIQUE","RWANDA","TAJIKISTAN","SURINAME"];

const wordText = document.querySelector(".word");  //accessing the p class which displays the scrambled word
const selectedLevel =document.querySelector(".selectedLevel");

let result ="";                                 //declaring result and currentlevel as empty so dat it can be redeclared and value can be used to store userinput
let currentLevel = "";

function game() {                                                 //initialising a function game and using math.randomm formula 
  if(currentLevel == "EASY"){
    result = easycountry[Math.floor(Math.random() * easycountry.length)];    //looping to find the user input level so that it can display random word from that particular array
  }
  else if(currentLevel == "MEDIUM"){
    result = mediumcountry[Math.floor(Math.random() * mediumcountry.length)];
  }
  else //if(currentLevel == "HARD")
  {
    result = hardcountry[Math.floor(Math.random() * hardcountry.length)];
  }

 
  const scrambled = result.split('').sort(function(){return 0.3 -Math.random()}).join('');//after getting the random word(result) it would split 
  //the word into separate characters in an array .They would be sorted  and  joined to form single string  
  console.log(scrambled);
  console.log(result);  
   wordText.innerHTML = scrambled;
  }
  game();

  function buttonClick(event){            //button click function to know exactly which level user chose and to display words from that particular array.
    let text = event.target.innerHTML;   //event.target gives us access to the DOM element the user clicked.
    //console.log(text);
    //console.log(currentLevel);
    currentLevel = text;
    selectedLevel.innerHTML = "The selected Level is " + currentLevel;
    //console.log(currentLevel);

  }

  function submit(){
  let userinput = document.getElementById("userinput").value; //To know what the user has given in the textbox when user clicked on the submit button
   //console.log("userinput")
    if(userinput== ''){                 
     alert("Uh -Oh!! Its Empty..Please enter the word");      //if the user-input is empty it would pop up a message 
    }
   else if(userinput.toLowerCase() == result.toLowerCase()){   //userinput would be considered even its in both lower aswell as uppercase
     alert("BINGO!!...Time for the Next One");
    game();
   }
   else {
    alert("Hmm.. Looks like "+ userinput.toUpperCase() + "  is Wrong...Try Again!!");      //highlighted in uppercase so dat user can identify what exactly he typed. 
   }
   document.getElementById("userinput").value = "";      // to clear the user input textbox after comparisons/validations
  }



    const easyBtn = document.getElementById("easybutton");         //accessing the easy mode button..
    easyBtn.addEventListener("click" ,buttonClick);                //knowing which level user has selected
    easyBtn.addEventListener("click" ,function onClick(event){     //turning the background color 
    document.body.style.backgroundColor ="lightgreen";});                                                           
    

  
    

   const mediumBtn = document.getElementById("mediumbutton");
   mediumBtn.addEventListener("click" ,buttonClick);
   mediumBtn.addEventListener("click" ,function onClick(event){
   document.body.style.backgroundColor ="purple"});
  

   
    const hardBtn = document.querySelector(".hard");
    hardBtn.addEventListener("click" ,buttonClick);
    hardBtn.addEventListener("click",function onClick(event){
    document.body.style.backgroundColor ="red" });

   
    easyBtn.addEventListener("click" ,game);                 //added eventlistener to 3 levels so that once userinputs their desired level
    mediumBtn.addEventListener("click" ,game);              //the game function would run and words would be displayed
    hardBtn.addEventListener("click" ,game);

  
   const submitBtn =document.querySelector(".Submit");    //accessing the submit button and added eventlistener click so dat submit function is called
   submitBtn.addEventListener("click" ,submit);           //to validate the userinput
   
   const refreshBtn =document.querySelector(".Refresh");     //accessing the refresh button 
   refreshBtn.addEventListener("click" ,game);
 
   let resetBtn = document.querySelector(".Reset")                     //accessing the reset button and added a function so that when user clicks the button
   resetBtn.addEventListener("click" ,function onClick(event){         //the page /game would reset to start.
   document.location.reload()});
  
