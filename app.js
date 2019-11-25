// app.js

const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products
// initialize our express app
const app = express();

// Set up mongoose connection 
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://testymail:1qaz2wsx@cluster0-suqqc.mongodb.net/productsapp?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log('Server is up and running on port ' +  port);
});