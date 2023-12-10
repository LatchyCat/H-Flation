/*
--@@---Questions--@@---

What makes a hoe?
A girl who sleeps with multiple men?
So if a girl at any age sleeps with multiple men during a one time event or separated by years makes her a hoe?

- Age
- time period (start - end date of hoeing events)
- How long has she been hoeing?
- is it a on and off thing? (Being a hoe for a little then a little again)
- emotional trauma creating hoeflation?
- Does the girl have both parents?

function hoeFlationCalculator(...hoes) {

};

*/


/*
--@@---HTML Front page---@@--

1. Create main site (hoeFlation) '304'
2. Ask a hoe a question
3. Chat box for inputting questions
4. Chat box for receiving a answer from a hoe
*/

// const readline = require('node:readline')
// const { stdin: input, stdout: output } = require('node:process');


const readline = require('readline');
const rl = readline.createInterface({ input: process. stdin, output: process. stdout, });
// Create readline interface const rl = readline. createInterface({ input: process. stdin, output: process. stdout, });

// rl.question('Hello and welcome to my Tedx talk. What is your name? ', (answer) => {
//     console.log(`Thank you for coming ${answer}`)

//     rl.close()
// })

const ac = new AbortController();
const signal = ac.signal;

function talker(argument) {
    if (argument === 'hello') {
        rl.question('Happy to see I got a new user. Type in your name. ', (userInput) => {
            console.log(`Does this mean where friends now ${userInput}?`)
            // rl.close() ... Add a close after the IIFE is invoked to end the questions
            // rl.close()
            responder()
        })
    }
};

talker('hello')

function responder(argument) {

    rl.question('since we`re friends now... tell me a secret: ', (secret) => {
        console.log(`Your secret is safe with me: ${secret}`)
        rl.close()
    })

    // return console.log('Dirty secrets')
};
