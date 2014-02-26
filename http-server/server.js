/**
 * Created by wdverme on 2/26/14.
 */

var http = require('http');

http.createServer(function(res, res){
    res.writeHead(200, {'Content-Type': 'text-plain'});
    res.write('hola');
    res.end(' mundo');
}).listen(8080);