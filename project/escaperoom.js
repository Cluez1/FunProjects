//Project 3: Escape Room Simulation
var readlineSync = require('readline-sync');


const playerName = readlineSync.question("May I have your name please?");
console.log(`${playerName}, welcome to the Escape Game Room Simulation!`);

//Boolean Flags
var hasKey = false;
var isAlive = true;
/*
while (isAlive == true){
    if(menuID == 1){
        //Put hand in the Hole
        //Player is DEAD. Game is over.
        console.log(`Oh no, ${playerName}, you put you hand in the hold. You are DEAD, unfortunately. Game is Over!`);
        isAlive = false;
    } else if (menuID == 2 && hasKey == false){
        //Player selected option-2 and has not found the key yet.
        console.log(`1${playerName}, you found the key. Please proceed to menu option 3!!`);
        hasKey = true;
    } else if (menuID == 2 && hasKey == true ){
        //Player selected option-2 and has the key in their possession.
        console.log(`${playerName}, you have already found the key, stop wasting your time. Please process with Option 3!!`);
    } else if (menuID == 3 && hasKey == false){
        console.log(`${playerName}, you have already found the key, you have not found the key yet. Please proceed with menu option 2 first and revisit this menu option later.`);
    } else if (menuID == 3 && hasKey == true){
        //Player chose option-3 and has found the key already.
        console.log(`${playerName}, you have already found the key and you were able to open the exit door successfully!! Great Job. You WIN. Congratulations!!.`);
        isAlive = false;
    }
}
// Use switch statement (Week 2 homework) use in project
*/
var menuID = readlineSync.keyIn('Enter 1 to put hand in hole, or, Enter 2 to Find the key, or, Enter 3 to Open the door: ',{limit: '$<1-3>'});

switch (isAlive){
    case menuID == 1:
        console.log(`Oh no, ${playerName}, you put you hand in the hold. You are DEAD, unfortunately. Game is Over!`);
        isAlive = false
        break
    case menuID == 2 && hasKey == false:
        console.log(`${playerName}, you found the key. Please proceed to menu option 3!!`);
        hasKey = true
        menuID = readlineSync.keyIn('Enter 1 to put hand in hole, or, Enter 2 to Find the key, or, Enter 3 to Open the door: ',{limit: '$<1-3>'});
    case menuID == 2 && hasKey == true:
        console.log(`${playerName}, you have already found the key, stop wasting your time. Please process with Option 3!!`);
    case menuID == 3 && hasKey == false:
        console.log(`${playerName}, you have not found the key yet. Please proceed with menu option 2 first and revisit this menu option later.`);
    case menuID == 3 && hasKey == true:
        console.log(`${playerName}, you have already found the key and you were able to open the exit door successfully!! Great Job. You WIN. Congratulations!!.`);
        isAlive = false;

}

