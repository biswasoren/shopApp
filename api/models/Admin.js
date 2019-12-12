let mongoose = require('mongoose')
const Schema = mongoose.Schema;

let Admin = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
  },
  password: {
    type: String, 
  }
})
module.exports = mongoose.model('Admin', Admin)