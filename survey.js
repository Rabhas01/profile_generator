const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer4) => {
       rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
           rl.question('Which sport is your absolute favourite? ', (answer6) => {
               rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
                console.log(`${answer1} likes to ${answer2} and your favorite song is ${answer3}and your favorite meal time is ${answer4}.Your favorite thing to eat is ${answer5}and your favorite sport is ${answer6}.Your super power is ${answer7} `);                  
                           
  rl.close()

          })    
          })
        })
      })
    })
  })  
});
