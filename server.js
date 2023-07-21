const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
require('dotenv').config()


const routes = require('./controllers')
const sequelize = require('./config/connection')
const hbs=exphbs.create({})
const PORT = process.env.PORT || 3002

app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
// app.use(routes)


sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Booking App is listening in http://localhost/${PORT}`)
    })
})