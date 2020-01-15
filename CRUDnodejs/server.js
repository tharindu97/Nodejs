require('./models/db');

const path = require('path');
const exphbs = require('express-handlebars');


const express = require('express');
var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

const employeeController = require('./controllers/employeeController');
app.use('/employee', employeeController);

app.listen(3000, () => {
    console.log('Express server started at port: 3000');
});