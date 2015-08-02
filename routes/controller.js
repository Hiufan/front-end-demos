var fs = require('fs');
// var marked = require('meta-marked');
var mkmeta = require('marked-metadata');
var path = require('path');

var getDirectories = function (srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

module.exports = {
    get: {       
        '/': function (req, res) {
            res.render('index'); 
        },
        '/api': function (req, res){
            var baseDir = './articles/',
               fs = require('fs'),
               directories = getDirectories(baseDir);

            var dataTable = {};

            for(var i in directories) {
              var mdFiles = fs.readdirSync(path.join(baseDir,directories[i])).filter(function(mdFile){
                return path.extname(mdFile);//返回后缀是.md的文件
              });
              dataTable[directories[i]] = mdFiles;
            }

            res.send(dataTable);
        },  
        '/:cat/:name': function (req, res) {
            //todo
            var mdFileName = req.path;
            var location = path.join(__dirname,'../articles/'+mdFileName);

            var md = new mkmeta(location);
            var meta = md.metadata();
            var content = md.markdown();
            console.log(content);
            res.send(content);
        }
    }
};


//参考文献：
//http://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object