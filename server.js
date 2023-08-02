const express = require('express')
const app = express()
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
require('dotenv').config()


const http = require('http');
const server = http.createServer(app);



const routes = require('./controllers')
const sequelize = require('./config/connection')
const hbs = exphbs.create({ });
const PORT = process.env.PORT || 3002


// Set up sessions with cookies
const sess = {
    secret: 'Vacay Booking secret',
    cookie: {
      // Stored in milliseconds
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
      // maxAge:300000,
      httpOnly:true,
      secure:false,
      sameSite:'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };
  
  app.use(session(sess));

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //app.use(bodyParser.json()) ///post empty
  app.use(express.static(path.join(__dirname,'public')))
  app.use(routes);
  






  
  
  



  
  sequelize.sync({force:false}).then(()=>{
      server.listen(PORT,()=>{
        console.log(`*****Vacation Booking App listening on port http://localhost:${PORT} *****`)
      })
})