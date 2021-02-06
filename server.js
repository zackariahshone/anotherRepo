const express = require('express');
const app = express();
const path = require('path')
const htmlRoutes = require('./routes/htmlRoutes.js');
const appRoutes = require ('./routes/applications.js')
const db = require('./models');
const port = process.env.PORT || 8000;

app.use(appRoutes)
app.use(htmlRoutes);
app.use(express.static(path.join(__dirname,'/public')))


db.sequelize.sync().then(()=>{
    app.listen(port, ()=>console.log('listening on 8000'));
});