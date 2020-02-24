const express = require('express'); // This is for the required express module.
const app = express(); //This is for calling express function to start new express applications.
const ejs = require('ejs') //This is for calling ejs templates which works well with express databases.
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressSession = require('express-session');

const homeController = require('./controllers/home')
const aboutController = require('./controllers/about')
const loginController = require('./controllers/login')
const adminController = require('./controllers/admin')
const lecturerController = require('./controllers/lecturer')
const studentController = require('./controllers/student')
const dashboardController = require('./controllers/dashboard')
const userSetupController = require('./controllers/usersetup')
const userStoreController = require('./controllers/userStore');
const userLoginController = require('./controllers/userLogin');

mongoose.connect('mongodb://localhost/PMS_database', {useNewUrlParser:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({entended:true}));

app.use(expressSession({
    secret:'keyboard cat'
}));

app.set('view engine','ejs'); //It sets the application to use ejs templates.

app.use(express.static('public')); // This renders static files from the public folder
app.set('port',process.env.PORT || 3500); // This is used for setting the port as a variable, to be used as default 3500.
app.listen(app.get('port'), () => {
    console.log('Express has started on http://localhost:'+ app.get('port')+'; Press Ctrl-C to terminate.');
});

app.get('/',homeController);

app.get('/about',aboutController);

app.get('/userLogin',loginController);

app.get('/admin', adminController);

app.get('/lecturer', lecturerController);

app.get('/student', studentController);

app.get('/dashboard', dashboardController);

app.get('/usersetup', userSetupController);

app.post('/userLogin/login',userLoginController);

app.post('/userSetup/store',userStoreController)