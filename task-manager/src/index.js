const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;


//add file upload to express
const multer = require('multer');
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        // if (!file.originalname.endsWith('.pdf'))
        //     return cb(new Error('Please upload a PDF'))
        if (!file.originalname.match(/\.(doc|docx)$/))
            return cb(new Error('Please upload a Word document'))
        cb(undefined, true);
        // cb(new Error(''), false)
        // cb(undefined, true)
    }
});
const errorMiddleware = (req, res, next) => {
    throw new Error('From my middleware');
}

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send();
}, (error, req, res, next) => {//function set up to handle uncaught errors!
    res.status(404).send({error: error.message});
})

app.use(express.json()); //automatically parse 
//incoming json to an object to access it in our request handlers
//req.body
app.use(userRouter); //registered routers
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

