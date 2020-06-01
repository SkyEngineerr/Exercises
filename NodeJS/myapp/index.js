const express = require('express');
const path = require('path')
const morgan = require('morgan');

const app = express()

const port = 8585;

app.use(morgan('dev'));

app.use(express.static(__dirname))

// app.use(function(req, res, next) {
//     console.log(`Time: ${Date.now()}`)
//     next();
    
// })

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname + '/index.html'))
// });


// app.get('/about', (req,res) => {
//     res.send('ABOUT')
// });

app.listen(port, ()=>{
    console.log(`Application is listening to the port ${port}`)
})