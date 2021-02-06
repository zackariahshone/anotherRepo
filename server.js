const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();
const routes = require('./routes/htmlRoutes.js')

app.use(routes)

app.use(express.static('public'))

app.listen(process.env.PORT || 8000, ()=>console.log('listening on 8000'))