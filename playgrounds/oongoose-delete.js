
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongooseDb');

var {Todo} = require('./../server/models/todo');

var id = '5c3e5069e33e6d36f0129e7e';

if (!ObjectID.isValid(id)){
	console.log('ID not found');
}

// Todo.remove({}).then(res){
// 	console.log(res);
// }
//by by id search
// Todo.findByIdAndRemove('5c3e50ade33e6d36f0129e80').then((todo) => {
// 	console.log(todo);
// });
// by find one and delete

Todo.findOneAndRemove('5c3e5069e33e6d36f0129e7e').then((todo) => {
	console.log(todo);
});