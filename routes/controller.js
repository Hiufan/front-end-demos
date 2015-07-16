module.exports = {
    get: {       
        '/': function (req, res) {
           //todo
           res.render('index',{title:'This is home page.'});       
        },       
        '/inbox': function (req, res) {
           //todo
           res.render('index',{title:'This is inbox page.'});
        }
    }
};