var express=requires('express');
var app=express();

var OrderController=function(req,res){
Console.log("list is following");

var Oreders=[
{id:1,name:"namrata",amount:5000,status="completed"},
{id:2,name:"jaya",amount:25000,status="completed"},
{id:3,name:"neha",amount:35000,status="not completed"}
];
res.send(Oreders);
};

app.get('/orders',OrderController);

var server=app.listen(8087,function(){
	var host=server.address().address
	var port=server.address().port
	Console.log("listening at ",host,port);
})