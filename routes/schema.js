var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

exports.User = new Schema({
    Name: String,
    // LName: String,
    Email: String,
    Password: String,
    CreationDate: Schema.Types.Mixed,
    IsActive: Boolean,
    Role: String,
    IsDeleted: Boolean
});

exports.CollectionTypes = {
    User: "user"
};








