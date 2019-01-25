// const {SHA256} = require('crypto-js');

// var message = "i sam going to skull";

// var hashMsg = SHA256(message).toString();

// // console.log(message);

// // console.log(hashMsg);

// var data = {
// 	id : 4
// };

// // var token = SHA256(JSON.stringify(data)

// var token = {
// 	data: data,
// 	hash : SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id= 5;
// // token.hash - SHA256(JSON.stringify(data)).toString();
//  var hashRes = SHA256(JSON.stringify(data) + 'somesecret').toString();

// if (hashRes === token.hash){
// 	console.log('data not changed');
// }else {
// 	console.log('data changed');
// }

// for JWT

const jwt = require('jsonwebtoken');

  var data ={
  	id : 5
  };


  var token = jwt.sign(data,'123dbf');
    console.log('encode :', token);

  var decode = jwt.verify(token,'123dbf');

 // console.log('decode :', decode);
 if (token === decode){
 console.log('verified');
 }else {
 	 console.log('not verified :');
 }