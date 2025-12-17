import express from 'express'
const app = express();
import path from 'path'
const port = 3000;

app.use('view engine', 'ejs')
app.use(express.json)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join('__dirname', 'public')))
app.get('/', (req, res) => {
    res.send('hello world!')
})
app.listen(port, () => {
    console.log(`server running at ${port}`)
})