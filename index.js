const hash = require('md5');
const fs = require('fs-extra');
const chalk = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(prompt) {
    return new Promise((callbackFunction, errorFunction) => {
        readline.question(prompt, (userInput) => {
            callbackFunction(userInput);
        }, () => {
            errorFunction();
        });
    });
}

async function getInputs() {
    const wordslist = await input(chalk.yellow("Please Insert The Wordslist Name (ex: rockyou.txt | rockyou) : "));
    const inputHash = await input(chalk.yellow("Please Insert The Hash: "));
    
    findPasswordMd5(inputHash, wordslist);
    readline.close();
}

function findPasswordMd5(inputHash, wordslist) {
    if(!wordslist || wordslist == null || wordslist == "") return console.log("Operation canceled. invalid input");
    if(!inputHash || inputHash == null || inputHash == "") return console.log("Operation canceled. invalid input");
    const startDate = Date.now();
    const extension = /.txt/;
    if(extension.test(wordslist) === false) wordslist = wordslist + ".txt";

    fs.readFile(`./wordlists/${wordslist}`, "utf-8", function (err, data) {
        if (err) throw err;
        const passwords = data.split("\n");

        for (let i = 0; i < passwords.length; i++) {
            const hashedPassword = hash(passwords[i]);
            if (hashedPassword === inputHash) {
                const endDate = Date.now();
                console.log(chalk.green(`\nPassword Found!`) + "\n\n" + chalk.green("<< " + passwords[i] + " >>") + `\nThe operation took :` + chalk.yellow(String(endDate - startDate) + "ms"));
                readline.close();
                break;
            } else console.log(chalk.red(`${passwords[i]} - Invalid`));
        };
    });
};

getInputs();