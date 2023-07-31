const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/{user}', (req, res) => {
    res.send('Hello ' + req.user)
})

app.use((req,res)=>{
    res.status(404).send('<h1>Tu página no existe</h1>')
})

app.listen(3000)
console.log("El servidor se aloja en el puerto 3000")