const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')


//setting up config file
dotenv.config({path :'backend/config/.env'})

//connecting to database
connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT} and environment ${process.env.NODE_ENV}`)
})


