
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//local
//mongoose.connect('mongodb://localhost:27017/TodoApp');
//server 
mongoose.connect('mongodb://todouser:user@123@ds113849.mlab.com:13849/todoapp');
module.exports= {mongoose};
