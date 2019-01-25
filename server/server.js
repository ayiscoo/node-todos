// for updates
const _= require('lodash');
var express = require('express');
var bodyPaser =  require('body-parser');

var {mongoose} = require('./db/mongooseDb');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

const {ObjectID} = require('mongodb');

var app = express();

const port = process.env.PORT || 3000;

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

app.delete('/todos/:id',(req,res) => {
     var id = req.params.id;

if (!ObjectID.isValid(id)){
	res.status(404).send();
//	console.log('ID not found');
} 
Todo.findByIdAndRemove(id).then((todo) => {
	if (!todo) {
		 return console.log('Id not found');
	}
	res.send({todo});
 //  console.log('findOne :',todo);
}).catch((e) => console.log(e));



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



// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		 return console.log('Id not found');
// 	}
// 	res.send({todo});
//  //  console.log('findOne :',todo);
// }).catch((e) => console.log(e));

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

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  })
});


// posting users 

app.post('/users',(req,res)=>{
	// use pick from lodash
	var body = _.pick(req.body,['email','password']);
	var users = new Users(body);
	users.save().then(() => {
		return users.generateAuthToken();
		        //res.send({users})
	}).then((token) => {
           res.header('x-auth',token).send(users);
	}).catch((e)=> {
      res.status(400).send(e);
	});


	
 // var users = new Users({
 //    email : req.body.email,
 //    password: req.body.password
 // });
 
 // users.save().then((doc) => {
 //     res.send(doc);
 // },(e) => {
 // 	res.status(400).send(e);
 // });
});


app.listen(port,()=>{
   console.log(`connected to port ${port}`);

});