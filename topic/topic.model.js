const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    URL : { type: String, required: true },
    port : { type: String, required: true },
    topic : { type: String, required: true },
    username : { type: String, required: true },
    password : { type: String, required: true },
    userId: { type: String, required: true },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Topic', schema);