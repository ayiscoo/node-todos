// const MongoClient = require('mongodb').MongoClient;
// destructuring 

const {MongoClient,ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);
//const test = require('assert');
// Connection url
//const url = 'mongodb://localhost:27017/TodoApp';
// Database Name
//const dbName = 'test';
// //Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  // Use the admin database for the operation
     if (err){
     	return console.log('Cannot connect to database')
     }
   const db = client.db('TodoApp');
 

    // findOneAndDelete
      db.collection('Todos').findOneAndUpdate({
      	_id : new ObjectID('5c399b5b0b610e2100345609')
      		},
          {
             $set : {
             	text : 'dunga doing his programming'
             }
          },
          {
          	returnOriginal: false        
          
      	}).then((results)=>{
             console.log(results);
    });
});