var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
     email : {
     	type : String,
     	require: true,
     	minLength : 1,
     	trim : true

     },
     password : {
     	type : String,
     	require: true,
     	minLength : 1,
     }

});

module.exports={Users};