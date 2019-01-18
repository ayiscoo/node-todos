
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url_ser = 'mongodb://ayiscoo:FFFdunga...@123@ds261114.mlab.com:61114/todos';
var url_loc ='mongodb://localhost:27017/TodoApp';

mongoose.connect(url_ser,(err) => {
        if (err){
          mongoose.connect(url_loc);
        }
});


module.exports= {mongoose};
