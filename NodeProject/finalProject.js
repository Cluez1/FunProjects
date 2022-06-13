const readlineSync = require('readline-sync');
const name = readlineSync.question('Greetings! May I have your name?');

readlineSync.question('Hello '+ name + ', Welcome to resident evil raccoon city. Where you will risk your life to survive in the zombie apocalypse! Press Enter to begin.');

const weaponBox = ['Hand Gun' ,'Shotgun', 'Sniper Rifle'];
const undeadMobs = ['Zombie Dogs', 'Licker' , 'Zombie' , ' Tyrant'];
const randomBox = ['MedKit', 'Security Armor', 'T-Virus Antidote'] + [weaponBox];

   


var prize = [];
let userHealth = 50;
const options = ['Walk', 'Exit', 'Print'];
let pickUp = randomBox[Math.floor(Math.random() * randomBox.length + weaponBox.length)];


function game(){
    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const undead = undeadMobs[Math.floor(Math.random() = undeadMobs.length)];
    let undeadMobsHealth = 50;
    const undeadMobsPower = Math.floor(Math.random() * (5 - 3 + 2) + 5);
    const weaponBox = armoredRounds[Math.floor(Math.random() * (1 - 2 + 2) + 5)];
   

    const index = readlineSync.keyInSelect(options, 'Ready to keep moving? What would you like to do?');

    if(options[index] == 'Exit') {
        return userHealth = 0;
    }else if (options[index] == 'Print'){
        console.log(name + ': \n' + userHealth + '\nweaponBox' + '\nrandomBox: ' + pickUp);
    }else if (options[index] === 'Walk'){
        let key = Math.random();
        if (key <= .3) {
            console.log('Walking.....');
        }else if (key >= .3){
            console.log(undead + ' showed up!');

            while(undeadMobsHealth > 0 && userHealth > 0) {
                const user = readlineSync.question('What do you want to do? enter "r" to run or "a" to attack: ');

                switch (user) {
                    case 'r': //Run Away
                        const run = Math.random();
                        if(run< .5) {
                            console.log('Before you can run away ' + undead + 'attacks you with: ' + undeadMobsPower);
                        }else {
                            console.log('You ran away!!');
                            break;
                        }
                    case 'a': //Attack
                        undeadMobsHealth -= attackPower;
                        if (weaponBox == true){
                            console.log('you attacked ' + undead + ' with' + weaponBox + 'attack power');
                        }else if (weaponBox == false){
                            console.log('you attacked ' + undead + ' with' + 'attack power');
                        }
                        
                        
                        userHealth -= undeadMobsPower;
                        console.log(' Enemy just attacked you with: ' + undeadMobsPower + 'attack power');

                        if(undeadMobsHealth <= 0){
                            console.log('You killed ' + undead + './n' + undead + 'left: ' + pickUp);
                            let loot = Math.random();
                            if (loot <= .3){
                                prize.push(pickUp);
                            }
                            }else if(userHealth <= 0){
                                console.log(undead + ' has infected you with the T-Virus. You become the undead, game over.');
                            }    
                    } 
                }
            }
        }
}
    game();