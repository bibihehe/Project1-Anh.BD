const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: Number,
    username: String, 
    image: String,    
    datePosted: { /* can declare property type with an object like this becau se we need 'default' */         
    type: Date,         
    default: new Date()     }
});
//Exportdd
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost