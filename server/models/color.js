var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var colorSchema = new Schema({
  colors: Schema.Types.Mixed
});


var Color = mongoose.model('colors', colorSchema);

// make this available to our users in our Node applications
module.exports = Color;
