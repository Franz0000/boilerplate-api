const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

//setting up config file
dotenv.config({path :'backend/config/.env'})

//connecting to database
connectDatabase()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",'http://localhost:4000' ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT} and environment ${process.env.NODE_ENV}`)
})
