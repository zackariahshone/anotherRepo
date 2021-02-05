const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/html/index.html'));
});

app.use(express.static('public'))

app.listen(process.env.PORT || 8000, ()=>console.log('listening on 8000'))