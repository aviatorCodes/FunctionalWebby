const express = require('express')
const router = express.Router()

router.get('/work', (req, res) => {
    res.redirect("http://localhost:3000/work.html")
})

router.get('/about', (req, res) => {
    res.redirect('http://localhost:3000/about.html')
})

router.get('/back', (req, res) => {
    res.redirect('http://localhost:3000')
})

router.get('/support', (req, res) => {
    res.redirect('https://bit.ly/3DgcZUM')
})

router.get('/forgotPassword', (req, res) => {
    res.redirect('https://bit.ly/3DgcZUM')
})

router.get('/YouTube', (req, res) => {
    res.redirect('https://www.youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw')
})

router.get('/Twitter', (req, res) => {
    res.redirect('https://twitter.com/SpRoUt68918071')
})

router.get('/signin', (req, res) => {
    res.redirect('http://localhost:3000/signin.html')
})

module.exports = router;