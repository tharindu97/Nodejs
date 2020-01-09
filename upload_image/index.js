var express = require('express');
const app = express();
var fileupload = require('express-fileupload');
app.use(fileupload());

app.get('/', (req, res, next) =>{
    res.status(200).send('hi tharindu');
});

app.post('/upload', function(req, res, next){
    const file = req.files.photo;
    file.mv('/Learning/node/Nodejs/upload_image/upload/'+file.name, function(err, result){
        if(err)
            throw err;
        res.send({
            success: true,
            message: 'File upload'
        });
    });
});

app.listen(3000, ()=>{
    console.log('Start on port: 3000');
});