const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/QuickDelivery', {                       
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then(() => console.log('QuickDelivery DB connection successful!'));


module.exports = mongoose;
