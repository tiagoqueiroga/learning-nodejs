var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://tiagoqueiroga:theclash87@ds033175.mongolab.com:33175/products');


// Saving some data
var Schema = mongoose.Schema,ObjectId = Schema.ObjectId;

var productSchema = new Schema({
  title:String,
  description:String,
  price:String
});
var Product = mongoose.model('Product',productSchema)






module.exports = router;
