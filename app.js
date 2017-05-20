var express= require('express');
var todocontroller=require('./controller/todocontroller');

var app=express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'))


//files controller
todocontroller(app);


//listen to port
app.listen(3000);
console.log('listening to port 3000');
