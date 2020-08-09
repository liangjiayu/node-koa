const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/test';

mongoose.Promise = global.Promise;

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', (error) => {
  console.warn('Error in MongoDb connection: ' + error);
});

db.once('open', () => {
  console.log('MongoDb open success');
});

module.exports = db;
