//  Hardcoded secret
const apiKey = "123456-SECRET-KEY";

// Dangerous function
eval("console.log('Executed via eval')");

// Child process exec (in Node.js)
const { exec } = require('child_process');
exec("ls", (err, stdout, stderr) => {
    console.log(stdout);
});
