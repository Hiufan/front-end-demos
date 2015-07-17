var fs = require('fs');
var marked = require('marked');
var path = require('path');

module.exports = {
    get: {       
        '/': function (req, res) {
           //todo
           var mdFiles = fs.readdirSync('./articles/');
           // console.log(mdFiles);
           res.render('index',{title: 'Home Page', mdFiles: mdFiles});
        },       
        '/detail/:name': function (req, res) {
            //todo
            var mdFileName = req.params.name+'.md';

            // res.render("../articles/" + mdFileName,{ title : mdFileName});
            var location = path.join(__dirname,'../articles/'+mdFileName);
            console.log(location);
            var file = fs.readFileSync(location, 'utf8');
            res.render('detail',{content:marked(file)});
        }
    }
};