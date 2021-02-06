const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const htmlRoutes = require('./routes/htmlRoutes.js');
// const appRoutes = require ('./routes/')
const db = require('./models');
const port = process.env.PORT || 8000;

app.use(htmlRoutes);

app.use(express.static('public'));


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>console.log('listening on 8000'));
});