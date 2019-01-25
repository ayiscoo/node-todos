const mongoose = require('mongoose');
const validator = require('validator');
// 	console.log('data not changed');
const _= require('lodash');

const jwt = require('jsonwebtoken');


// using schema to store properties
var UserSchema = new mongoose.Schema({
     
     email : {
     	type : String,
     	require: true,
     	minLength : 1,
     	trim : true,
     	unique: true,
     	// install npm validator
     	validate: {
     		validator: validator.isEmail,
     		message : '{VALUE} is not a valid email'
     	}

     },
     // using npm customs validator to inject token arrays
     password : {
     	type : String,
     	require: true,
     	minLength : 6,

     },
     token : [{
     	access: {
     		type: String,
     		required: true
     	},
     	token :{
     		type: String,
     		required: true
     	}
     }]
 

});


// var Users = mongoose.model('Users',{
//      email : {
//      	type : String,
//      	require: true,
//      	minLength : 1,
//      	trim : true,
//      	unique: true,
//      	// install npm validator
//      	validate: {
//      		validator: validator.isEmail,
//      		message : '{VALUE} is not a valid email'
//      	}

//      },
//      // using npm customs validator to inject token arrays
//      password : {
//      	type : String,
//      	require: true,
//      	minLength : 6,

//      },
//      token : [{
//      	access: {
//      		type: String,
//      		required: true
//      	},
//      	token :{
//      		type: String,
//      		required: true
//      	}
//      }]

// });

// update schema 

UserSchema.methods.toJSON = function(){
	 var user = this;
	 var userObject = user.toObject();
	 return _.pick(userObject ,['_id','email']);
}

//creating an instance method
UserSchema.methods.generateAuthToken = function(){
	 //no error fun bcos we need the this keyword
	 var user = this;
	 var access = 'auth';
	 var token = jwt.sign({_id: user._id.toHexString(),access}, 'abc123').toString();
  // add user to array
     user.token = user.token.concat([{access,token}]);
    return  user.save().then(() => {
         return token;
     });
}

 var Users = mongoose.model('User', UserSchema);


module.exports={Users};