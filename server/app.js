const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// created
app.post('/insert', (request, response) => {

});


// read - when the dom is loaded we do a fetch call from front to back
app.get('/getAll', (request, response) => {
  console.log('test');// see below
});
// run - npx nodemon in terminal and open browser and type localhost:5000/getAll
// terminal will display "app is running" and "test" 


// update



// delete

// start server
// get port from .env
app.listen(process.env.PORT, () => console.log('app is running'));