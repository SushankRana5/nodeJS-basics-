import express from "express";
import fs from "fs";
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { email, password, confirmPassword } = req.body;
    const data = `email:${email},password:${password},confirmPassword=${confirmPassword}`
    
        fs.writeFileSync('userdata.txt', data);
        
    res.send(`vayo hai`)
    
})
app.listen(port, () => {
    console.log(`server running at ${port}`)
})