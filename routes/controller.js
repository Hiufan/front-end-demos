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
            //todo
            var baseDir = './articles/',
               fs = require('fs'),
               directories = getDirectories(baseDir);

            var dataTable = {};
            dataTable.directories = directories;
            dataTable.archive = {};

            for(var i in directories) {
              var mdFiles = fs.readdirSync(path.join(baseDir,directories[i])).filter(function(mdFile){
                return path.extname(mdFile);//返回后缀是.md的文件
              });
              dataTable.archive[directories[i]] = mdFiles
            }

            res.render('index'); 
        },
        '/api': function (req, res){
            var baseDir = './articles/',
               fs = require('fs'),
               directories = getDirectories(baseDir);

            var dataTable = {};
            // dataTable.directories = directories;
            // dataTable.archive = {};

            for(var i in directories) {
              var mdFiles = fs.readdirSync(path.join(baseDir,directories[i])).filter(function(mdFile){
                return path.extname(mdFile);//返回后缀是.md的文件
              });
              dataTable[directories[i]] = mdFiles
            }
            res.send(dataTable);
        },
        '/catgory/:name': function (req, res){

        },   
        '/detail/:name': function (req, res) {
            //todo
            var mdFileName = req.params.name+'.md';

            // res.render("../articles/" + mdFileName,{ title : mdFileName});
            var location = path.join(__dirname,'../articles/'+mdFileName);
            // console.log(location);
            // var file = fs.readFileSync(location, 'utf8');
            // res.render('detail',{content:marked(file)});
            // var file = fs.readFile(location, 'utf8', function (err, data) {
            //   if(err) {
            //     console.log(err);
            //   }
            //   res.send(marked(data));
            //   // res.render('detail',{content: marked(data)});
            // });
              var md = new mkmeta(location);
              // md.defineTokens('<!--', '-->');
              var meta = md.metadata();
              var content = md.markdown();
              // console.log(content);
              res.send(content);
        },
        '/test' : function (req, res) {

        }

        // '/write': function (req, res) {
        //     var dest = path.join(__dirname,'../articles/');
        //     fs.writeFile(dest+'message.md', '#    Hello Node', function (err) {
        //       if (err) throw err;
        //       res.send('It\'s saved!');
        //     });
        // }
    }
};


//参考文献：
//http://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object