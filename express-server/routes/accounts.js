/**
 * Created by wdverme on 2/26/14.
 */
var db = require('../db/mongo');

exports.addAccount = function(req, res){
    var payload = req.body;

    db.accounts.insert(payload, function(err, result){
        if (err) res.send(err);
        res.send(result[0]);
    });
};

exports.updateAccount = function(req, res){
    var id = parseInt(req.params.id);

    db.accounts.update({id: id}, {'$set':{name: req.body.name, updated_at: new Date()}}, function(err) {
        if (err) res.send(err);

        res.send(req.body);
    });
};

exports.deleteAccount = function(req, res){
    var id = parseInt(req.params.id);

    db.accounts.remove({id: id}, function(err){
        if (err) res.send(err);

        res.send('deleted');
    })
};

exports.findAll = function(req, res){
    db.accounts.find({}).toArray(function(err, result){
        if (err) res.send(err);
        res.send(result);
    });
};

exports.findById = function(req, res){
    var id = parseInt(req.params.id);
    add(1, function (a, b){ return a + b;});
    db.accounts.find({id: id}).toArray(function(err, result){
        if (err) res.send(err);
        res.send(result[0]);
    });
};


function add(a, f){
    return f(a, 2);
}