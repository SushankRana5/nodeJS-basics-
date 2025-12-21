import express from 'express'
const app = express();
const saltRounds = 10;
import bcrypt from 'bcrypt'

app.get('/', (req, res) => {
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash("hahahahahaah", salt, (err, hash) => {
            console.log(salt);
        });
    });


    bcrypt.compare("hahahahahaah", "$2b$10$XvKy8vY5m9iXnE8rrvy/Re", (err, result) => {
        console.log(result);
    });

    res.send('creating salt and hash')
})
// app.get('/compare', (req, res) => {
//     bcrypt.compare("hahahahahaah", "$2b$10$XvKy8vY5m9iXnE8rrvy/Re", (err, result)=> {
//         console.log(result);
//     });
//     res.send('comparing password')
// })
app.listen(3000);