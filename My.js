const express = require("express")
const mongoose = require("mongoose")
const morgan = require('morgan')
const path = require('path')
const routes = require('./MyAPI/Routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT  = process.env.PORT || 9080;


mongoose.connect('mongodb://localhost:27017/NewDB', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected !");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(morgan('tiny'));
app.use('/', routes)

app.listen(PORT, console.log(`Server is startin at ${PORT}`));