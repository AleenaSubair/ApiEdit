var mongoose=require('mongoose');
var studentSchema=mongoose.Schema({
    name : String,
    age : String,
    place : String
});
var student = mongoose.model('student',studentSchema);
module.exports=student;