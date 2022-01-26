const BlogPost = require('../models/BlogPost.js')
module.exports = (req, res) => {
    BlogPost.findByIdAndDelete(req.params.id, function (error, detailPost) {
        res.redirect('/ad' )
    })
}