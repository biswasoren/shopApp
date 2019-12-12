const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Shops = new Schema({
  shopName: {
    type: String
  },
  shopMail: {
    type: String
  },
  shopAddress: {
    type: Object
  },
  shopId: {
    type: String
  }
},{
    collection: 'shops'
});

module.exports = mongoose.model('Shops', Shops);