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
// Connect using MongoClient
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
  // Use the admin database for the operation
     if (err){
     	return console.log('Cannot connect to database')
     }
     const db = client.db('TodoApp');
      db.collection('Users').insertOne({
      	name:'isaac',
      	age : '32',
      	location : 'Ghana'
      }, (err,results)=> {
         
         if (err){
         	return console.log('Unable to do', err);
         }
         console.log(JSON.stringify(results.ops[0]._id.getTimestamp(),undefined,2));
      });

     //console.log('connected to db');
     client.close();
});