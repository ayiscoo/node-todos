var express = require('express');
var bodyPaser =  require('body-parser');

var {mongoose} = require('./db/mongooseDb');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

const {ObjectID} = require('mongodb');

var app = express();

// create a middle ware

app.use(bodyPaser.json()); 

app.post('/todo',(req,res)=>{
 var todo = new Todo({
    text : req.body.text
 });
 
 todo.save().then((doc) => {
     res.send(doc);
 },(e) => {
 	res.status(400).send(e);
 });
});

app.get('/todos',(req,res)=>{
   Todo.find().then((todos)=>{
     res.send(todos);
   },(e) =>{
      res.status(400).send(e);
   });
});

app.get('/todos/:id',(req,res)=>{
//res.send(req.params.id);
 var id = req.params.id;

if (!ObjectID.isValid(id)){
	res.status(404).send();
//	console.log('ID not found');
} 

Todo.findById(id).then((todo) => {
	if (!todo) {
		 return console.log('Id not found');
	}
	res.send({todo});
 //  console.log('findOne :',todo);
}).catch((e) => console.log(e));



Todo.findById(id).then((todo) => {
	if (!todo) {
		 return console.log('Id not found');
	}
	res.send({todo});
 //  console.log('findOne :',todo);
}).catch((e) => console.log(e));


   // Todo.find().then((todos)=>{
   //   res.send(todos);
   },(e) =>{
      res.status(400).send(e);
   });


//   if (!ObjectID.isValid(id)){
// 	console.log('ID not found');
// }

// // Todo.findById(id).then((todo) => {
// // 	if (!todo) {
// // 		 return console.log('Id not found');
// // 	}
// //    console.log('findOne :',todo);
// // }).catch((e) => console.log(e));


// Todo.findOne(
// 	{
// 		 _id: id
// 	}).then((todo) => {
// 	if (!todo) {
// 		 return console.log('Id not found');
// 	}
//    console.log('findOne :',todo);
// }).catch((e) => console.log(e));




// newTodo.save().then((doc)=>{
//    console.log('save todo',doc);
// }, (err)=>{
//     console.log('Unable to save to database');
// });


app.listen(3000,()=>{
   console.log('connected to port 3000');

});