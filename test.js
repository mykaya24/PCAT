const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/pcat-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

/*Photo.create({
  title: 'Photo Title 2',
  description: 'Photo description 2 lorem ipsum',
});*/

const findx = Photo.findOne({title:"Photo1"}).exec();
findx.

