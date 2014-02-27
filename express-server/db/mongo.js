/**
 * Created by wdverme on 2/26/14.
 */

var mongoskin = require('mongoskin');


var result = mongoskin.db('mongodb://localhost:27017/express-server-sample');

result.collection('accounts').ensureIndex([['id', 1]], true, function(err, replies){});
result.bind('accounts');

exports.accounts = result.bind('accounts');