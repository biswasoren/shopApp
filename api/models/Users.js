const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Users = new Schema({
  userName: {
    type: String
  },
  userMail: {
    type: String
  },
  shopId: {
    type: String
  },
  userId: {
    type: String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('Users', Users);