'use strict'
/**
 * server cache data    
 */

var cluster = require('cluster')
var uuid = require('uuid')

var CONF_SOURCE = 'store-cluster'
// caches data
var caches = {}
var pending = {}

if(cluster.isMaster){
    cluster.on('fork', function (worker) {
        worker.on('message', function(msg){
            if(msg.source !== CONF_SOURCE) return

            var value = caches[msg.key]

            worker.send({
                source: CONF_SOURCE,
                value: value,
                id: msg.id
            })
        })
    }) 
}else{
    process.on('message', function (msg) {
        if (msg.source !== CONF_SOURCE) return
        
        var incoming = pending[msg.id]

        incoming.callback(msg)

        delete pending[msg.id]
    })
}

function getIndexData(){
	var reData = {
        reData: 'test'
    }

	caches['reData'] = reData
}
var cout = 0
var StoreCluster = function StoreCluster(options){
    if (!(this instanceof StoreCluster)) {
        if(cluster.isMaster) {
            getIndexData()
            setInterval(function(){
                getIndexData()
                console.log(CONF_SOURCE, cout)
                cout ++

            }, 1000 * 50)           
        }

        return new StoreCluster(options)
    }   
}


StoreCluster.prototype.get = function(key, callback){
	var msg = {
        id: uuid.v4(),
        source: CONF_SOURCE,
        key: key,
        callback: callback
    }

    pending[msg.id] = msg
    process.send(msg)
}

module.exports = StoreCluster