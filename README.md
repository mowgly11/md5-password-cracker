<h1> JavaScript Nodejs Password Cracker </h1>

<h3> Guide: </h3>

The current version supports only **md5**

You can find **rockyou** wordslist already in the wordslists folder, you can change it by adding another text file to the folder (no need to delete rockyou.txt)

when you run the script using `node index.js`, you will have to enter the **md5** hash that you have, and the script will hash and compare passwords with that hash. if it was found it will basically return it to your terminal, and also create a file containing that password.

You can paste your wordslist on the wordslist folder then you can start working with it.

<h3> Required Packages and Tools: </h3>

* `Nodejs`
* `md5` for hashing
* `readline` to use the tool on your console/terminal
* `fs-extra` to read the Wordslist
* `chalk` to make the terminal UI look better

You can install these packages by using the command `npm install`
