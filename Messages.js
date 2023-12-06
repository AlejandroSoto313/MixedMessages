/* Creating random Message Generator
    -First creat the array of all messages and their speaker
    -Need to have a total of three objects in output.
    -Find third object(1.Speaker, 2.Quote, 3....)
*/
//Create Array's

/* People list:
    David Goggins
    Jordan peaderson
    Mahatma Gandhi
    Tony Robbins
    Simon Sinek
*/
const speakers= ["-David Goggins", "-Jordan Peterson", "-Tony Robbins", "-Simon Sinek", "-Andrew Tate"];

const jordanQ = ["Compare yourself to who you were yesterday, not to who someone else is today.", "Perhaps you are overvaluing what you don’t have and undervaluing what you do.", "To learn is to die voluntarily and be born again, in great ways and small.", "Truth, virtue, and courage are not necessarily enough, but they are our best bet.", "Can you imagine yourself in 10 years if instead of avoiding the things you know you should do, you actually did them every single day—that’s powerful"];

const davidQ = ["I don’t stop when I’m tired, I stop when I’m done.", "Greatness pulls mediocrity into the mud. Get out there and get after it.", "Mental toughness is a lifestyle.", "Never let people who choose the path of least resistance steer you away from your chosen path of most resistance.", "Pain unlocks a secret doorway in the mind, one that leads to both peak performance, and beautiful silence."];

const tonyQ = ["Identify your problems, but give your power and energy to solutions.", "Your past does not equal your future.", "It's not knowing what to do; it's doing what you know.", "If you can't, you must. If you must, you can.", "Setting goals is the first step in turning the invisible into the visible."];

const simonQ = ["Leaps of greatness require the combined problem-solving ability of people who trust each other.", "The true price of leadership is the willingness to place the needs of others above your own.", "Leadership is not a license to do less; it is a responsibility to do more.", "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.", "As the Zen Buddhist saying goes, how you do anything is how you do everything."];

const tateQ = ["You’ve been given another day of life. How will you use it? Will you wait until tomorrow as you’ve done for years or decide today is the day you commit to excellence?", "The temporary satisfaction of quitting is outweighed by the eternal suffering of being nobody.", "Your mind must be stronger than your feelings.", "If failure makes you stronger you can never lose.", "A man without a vision for his future always return to his past."];

const quotes = [jordanQ,davidQ,tonyQ,simonQ,tateQ];

//Third object to add in output


//Fuction to be called to print message
//Create a loop to choose random speaker and quote of theirs
function randomSpeaker(){
    let num = Math.floor(Math.random()*speakers.length);
    let speaker = speakers[num];
    return speaker;
}

function randomQuote(speaker){
    let index = 0;
    switch(speaker){
        case "-David Goggins":
            index = Math.floor(Math.random()*davidQ.length);
            return davidQ[index];
            break;
        case "-Jordan Peterson":
            index = Math.floor(Math.random()*jordanQ.length);
            return jordanQ[index];
            break;
        case "-Tony Robbins":
            index = Math.floor(Math.random()*tonyQ.length);
            return tonyQ[index];
            break;
        case "-Simon Sinek":
            index = Math.floor(Math.random()*simonQ.length);
            return simonQ[index];
            break;
        case "-Andrew Tate":
            index = Math.floor(Math.random()*tateQ.length);
            return tateQ[index];
            break;
        default:
            return "Undifined speaker..";
    }
}

//Create Function to do it all in one.
function RandomMessage(){
    let speaker = randomSpeaker();
    let quote = randomQuote(speaker);
    console.log(quote+" "+speaker);
}

console.log();
RandomMessage();
console.log();

//Test mulitple times!!!
/* Once Created, Commit the changes and upload to GitHub Repository list*/