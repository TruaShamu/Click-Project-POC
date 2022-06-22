const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views');

const adminRoutes = require('./routes/clicks');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRoutes);

app.listen(3000);


