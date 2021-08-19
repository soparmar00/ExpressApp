const express = require("express")
const mongoose = require("mongoose")
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./Routes/routes')
const userRoutes = require('./Routes/userRoutes')
const postRoutes = require('./Routes/postRoutes')
const commentRoutes = require('./Routes/commentRoutes')

const PORT = process.env.PORT || 9060;


mongoose.connect('mongodb://localhost:27017/AuthDB', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => {
    console.log("Mongoose is connected !");
});

app.get('/user', (req, res) => {
    res.send("Hello from about")
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(morgan('tiny'));

app.use(routes);
app.use(userRoutes);
app.use(postRoutes);
app.use(commentRoutes);

app.listen(PORT, console.log(`Server is startin at ${PORT}`));