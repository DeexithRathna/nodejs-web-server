const express = require('express')
const hbs = require('hbs')

var app = express()


app.use((req,res,next) =>{
console.log(new Date().toString())  
res.render('maintainance.hbs')  
//next()
})
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs')
app.use(express.static(__dirname+'/public'))
app.get('/', (req, res)=>{
    // res.send('Hello Deexith!!! From Express app')
    res.send({
        name: 'Deexith',
        age: 24,
        friends: ['Nishant', 'Ravi', 'Vikas', 'Garg']
    })
})

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        name: 'Deexith Rathna',
        year: new Date().getFullYear(),
        dirname: `${__dirname}`
    })
})

app.get('/home', (req,res)=>{
    res.render('home.hbs', {
        name: 'Deexith Rathna',
        year: new Date().getFullYear(),
        dirname: `${__dirname}`
    })
})


app.listen(3000)