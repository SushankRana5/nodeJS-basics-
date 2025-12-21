import express from 'express'
const app = express();
const saltRounds = 10;
import bcrypt from 'bcrypt'

// app.get('/', (req, res) => {
//     bcrypt.genSalt(saltRounds, function (err, salt) {
//         bcrypt.hash("hahahahahaah", salt, (err, hash) => {
//             console.log(salt);
//         });
//     });
//     res.send('creating salt and hash')
// })
app.get('/', (req, res) => {
    bcrypt.compare("hahahahahaah", "$2b$10$MjCaUOUM7bhNWi//YEV5eO", (err, result)=> {
        console.log(result);
        console.log(err);
        
    });
    res.send('comparing password')
})
app.listen(3000);