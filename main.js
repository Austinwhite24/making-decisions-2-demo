let backpack = [];

backpack.push(`Sword`);
backpack.push(`Shield`);
backpack.push(`Food`);

// backpack.shift()
backpack.splice(0, 1);

let furCoat = `Fur coat`;

backpack.push(furCoat);

backpack.pop();

let itemCount = backpack.length;

backpack.push(`flint`, `blanket`, `knife`, `toothbrush`);

let backpack2 = backpack.splice(3, 3)

// for (let i = 0; i < backpack.length; i++){
//     console.log (`this is an interation of our loop, and this is the current elment of the array:`, backpack[i])
// }

// for(let i =0; i <= backpack2.length - 1; i++) {
//     console.log(backpack2[i])
// }
// 
// backpack.push(`hat`)
// for (let i = 0; i <3; i++){
//     console.log(backpack[i])
// }
// if (backpack.length >= 3) {
//     for (let i = 0; i<3; i++){
//         console.log(backpack[i])

//     }
// }


// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log(`--------`, guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log(`guessMe is divisble by 4 or 5. Added 25 `)
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log(`guessMe is divisble by 3. Subtracted 27`)
        guessMe -= 27
    } else {
        console,log(`hit else,added 3`)
        guessMe += 3
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`)
}
console.log(`final value:`, guessMe)