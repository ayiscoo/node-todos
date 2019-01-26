 var {Users} = require ('./../models/users');

var authenticate = (req,res,next) => {
   var token = req.header('x-auth');

   Users.findByToken(token).then((user) => {
      if(!user){
         return Promise.reject();
      }
      req.user = user;
      res.token = token;
     
     // for u run the next function use  next froom middleware

     next ();
      //sconsole.log(user);
      //res.send(user);
   }).catch((e) => {
   	res.status(404).send(e);
   });
};


module.exports= { authenticate } ;