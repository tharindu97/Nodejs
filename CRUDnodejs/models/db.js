const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', {useNewUrlParser: true}, (err)=> {
    if (!err) { console.log('MongoDB connection Success')}
    else {console.log('Error ' + err)}

});

require('./employee.model');
