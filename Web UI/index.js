var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var session=require('express-session');
var cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
var x="sdsd";
//Used for using ejs file in node
app.set('view engine','ejs');

//used for setting the directory
app.set('views','./views');

//keeping this as a static directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(cookieParser());

app.use(session({
    secret:'use_secret_session',
    resave:false,
    saveUninitialized:true

}));



//routing to root 
app.get('/',function(req,res){
       
    res.render('home',{
        Students
    });
  
});




//get to home
app.get('/home',function(req,res){
    if(!req.session.user)
    {
        res.redirect('/');
    }else{
        
       
        
        res.render('home',{
            Students
        });
    
   
    }
});

//get to create
app.get('/create',function(req,res){
    if(!req.session.user)
    {
        res.redirect('/');
    }else{
        res.render('create');
    }
});

app.get('/findMaps',function(req,res){
    res.render('findMaps')
});

app.get('/Output',function(req,res){
    res.render('Output')
});



app.get('/policy',function(req,res){
	
});
//-----
app.post('/submit-tender',function(req,res){
         
});



app.post('/register',function(req,res){
    
})


app.get('/submit-tender',function(req,res){
    res.render('submit-tender')
})

var Students=[
    {"name":"Ketan Kodmelwar","studentid":"013312325","department":"MS SE"},
    {"name":"Aniket Chandak","studentid":"013314565","department":"MS CS"},
    {"name":"Prashant Pardeshi","studentid":"013312456","department":"MS CS"}
]




var server=app.listen(4500,function(){
    console.log("Server on port 4500");
});