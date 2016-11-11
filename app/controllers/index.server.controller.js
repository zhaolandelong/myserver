module.exports = {
    index: function (req,res) {
        res.render('index.jade',{title:'Hey',message:'Hello there!'});
    }
};
