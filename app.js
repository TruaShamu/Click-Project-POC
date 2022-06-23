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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});