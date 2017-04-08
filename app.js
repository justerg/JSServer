let express=require('express');
let app=express();
let bodyParser= require('body-parser');

const PORT=4000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); /*support to json bodies*/
app.use(bodyParser.urlencoded({extended:true})); //suport to encoded bodies 


app.post('/hello',function(req,res){
	res.send(`jelou world`);
});

app.post('/mail',function(req,res){
	console.log(req.body);
	console.log(req.body.Name);
	res.send(`jelou ${req.body.Name}`);
});

app.listen(PORT, function(){
	console.log('server listen on port 4000');
});