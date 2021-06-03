const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://devf:devf2021@cluster0.ufhux.mongodb.net/master-gen-4?retryWrites=true&w=majority';

const User = require('./User');

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error) => {
    error ? console.log(error) : console.log('Database Connected');
  },
);

module.exports = {
  User,
};
