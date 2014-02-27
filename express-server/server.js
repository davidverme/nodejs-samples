/**
 * Created by wdverme on 2/26/14.
 */

var express = require('express');
var accounts = require('./routes/accounts');

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
});

app.post('/accounts', accounts.addAccount);

app.put('/accounts/:id', accounts.updateAccount);

app.delete('/accounts/:id', accounts.deleteAccount);

app.get('/accounts', accounts.findAll);

app.get('/accounts/:id', accounts.findById);

app.listen(9000);
console.log('listening on port 9000');