var express=require('express');
var app=express();

app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/');
var student=require('./model/student.js');
const { name } = require('ejs');
// app.get('/send',function(req,res){
//   res.json({
//     name:"Aleee"//hopscotch get paste url
//   })
// });



app.post('/detail',function(req,res){ //insertion of details
  var info=req.body;
  console.log(info);
  var stu=new student({
    name:info.name,
    age:info.age,
    place:info.place
  });

  stu.save(function(err,response){
    if(err){
      res.send("error");
    }
    else{
      res.json("success");
    }
  });
});

app.get('/show',function(req,res){
  student.find(function(err,response){
    res.json(response);
  });
});

app.delete('/delete',function(req,res){
  var n=req.body.name
  student.deleteOne({name:n}, function(err,response){
    if(err){
      res.json("error");

    }

    else{
      res.json("Success");

    }
  });
});

// app.get('/edit/:id',function(req,res){
//   student.findById(req.params.id,function(err,response){
//     res.render('edit',{'data':response});
//   });
// });

// app.post('/edit/id:',function(req,res){
//   student.findByIdAndUpdate(req.params.id,req.body,function(err,response){

//     if(err){
//       res.json({message:"Error in updating student"});

//     }

//     else{
//       res.render('/list/?message=success');
//     }
//   });
// })

app.listen(3025);