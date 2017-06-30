var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('./mongoose-conn');
var schema = require('./schema');
var UserModel = mongoose.model(schema.CollectionTypes.User, schema.User);
var jwt = require('jsonwebtoken');
var config = require('../config');


router.get('/', function (req, res) {
    res.render('login');
});
router.get('/home',isAuthenticated, function (req, res) {
    //TODO: Remove hard coding of path
    res.sendFile('/home/pramod/Documents/HBOSS/public/src/index.html');
});

router.post('/auth', function (req, res) {
    var userModel = req.body;
    var action = userModel.action;
    switch (action) {
        case "setpassw":
            UserModel.find({Email: userModel.username, IsDeleted: false}, function (err, result) {
                if (err)
                    return console.log(err);
                var user = result[0].toJSON();
                user.Password = userModel.password;
                user.IsActive = true;
                UserModel.findByIdAndUpdate(user._id, user, {upsert: true, new: true}, function (err, doc) {
                    if (err)
                        return console.log(err);
                    res.send({status: true});
                });
            });
            break;
        case "signin":
            UserModel.find({
                Email: userModel.username,
                Password: userModel.password
            }, function (err, result) {
                if (err)
                    return console.log(err);
                console.log(result);
                if (result.length) {
                    var usr = result[0];
                    var token = jwt.sign(usr, config.superSecret);
                    res.cookie('token', token, { maxAge: 1000*24*60*60, httpOnly: true });
                    res.send({loggedUser:usr, token: token, status: true});
                }
                else
                    res.send({status: false});

            });
            break;
    }
});


function isAuthenticated(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
    if (token) {
        jwt.verify(token, config.superSecret, function(err, decoded) {
            if (err) {
                res.redirect("/");
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        res.redirect("/");
    }
}
module.exports = router;