const mongoose = require('mongoose');
const kostSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {
      type: String,
      reqired: true
   },
   desc: {
      type: String,
      required: true
   },
   address: {
      type: String,
      required: true
   },
   picture: {
      type: String,
      required: true
   }
})

module.exports = mongoose.model('Kost', kostSchema);