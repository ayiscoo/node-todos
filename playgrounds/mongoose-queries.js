
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongooseDb');

var {Todo} = require('./../server/models/todo');

var id = '5c3e5069e33e6d36f0129e7e';

if (!ObjectID.isValid(id)){
	console.log('ID not found');
}

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		 return console.log('Id not found');
// 	}
//    console.log('findOne :',todo);
// }).catch((e) => console.log(e));


Todo.findOne(
	{
		 _id: id
	}).then((todo) => {
	if (!todo) {
		 return console.log('Id not found');
	}
   console.log('findOne :',todo);
}).catch((e) => console.log(e));


