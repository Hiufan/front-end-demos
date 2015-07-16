'use strict'

var cluster = require('cluster')
var os = require('os')
var cpuCount = os.cpus().length
var http = require('http')
var app = require('./work')


if (cluster.isMaster) {
    var wrap = function(worker){
        worker.on('online', function(){
            worker.on('message', function(msg){
                if(msg){
                    worker.send('tttt')
                } else {
                    console.error('empty worker message')
                }
            })    
        })        
    }
    for (var i = 0; i < cpuCount; i++){
    	wrap(cluster.fork())
    } 
    cluster.on('exit', function (worker) {
        console.error('Worker ' + worker.id + 'died :(')
        wrap(cluster.fork())
    })
} else {
    app()
}
