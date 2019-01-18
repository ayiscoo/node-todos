var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
     text : {
     	type : String,
     	required: true,
     	minLength : 1,
     	trim : true
     },
     completed: {
     	type : String,
     	default: false
     },
     completedAt: {
          type : String,
          default: null
     }

});

module.exports= {Todo};