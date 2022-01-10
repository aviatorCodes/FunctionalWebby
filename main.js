const express = require('express')
const app = express()

app.use(express.static("views"))

app.set('view engine', 'ejs')

app.listen(3000)

app.get('/', (req, res) => {
    res.render('index')
})

const main_r = require('./routes/main_r')
app.use('/', main_r)



console.log("Build Successful")