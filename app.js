const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');


const photoControllers = require('./controllers/photoControllers');
const pageController = require('./controllers/pageController')

const app = express();

mongoose.connect('mongodb://localhost/pcat-test-db');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());


app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

app.get('/', photoControllers.getAllPhotos);
app.get('/photos/:id', photoControllers.getPhoto);
app.post('/photos', photoControllers.createPhoto);
app.put('/photos/:id', photoControllers.updatePhoto);
app.delete('/photos/:id', photoControllers.deletePhoto);

app.get('/photos/edit/:id',pageController.getEditPage );
app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port} uzerinde baslatildi`);
});
