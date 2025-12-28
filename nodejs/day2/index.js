console.log("Hello from day2/index.js");
const os = require('node:os');
import os from 'node:os'
console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
const fs = require('node:fs/promises');
fs.writeFile('test.js', 'console.log("hello world")', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully');
});
