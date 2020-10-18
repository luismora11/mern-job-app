const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const jobSchema = new Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    email: {type: String, required: true} 

})

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;