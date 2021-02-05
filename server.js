const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

app.get('/', (req, res)=>{
    res.send('home test server')
});

app.use(express.static('index.html'))

app.listen(process.env.PORT || 8000, ()=>console.log('listening on 8000'))