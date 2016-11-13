var express =require('express');
var morgan=require('morgan');
var path=require('path');
var Pool=require('pg').Pool;

var config={
user:'marymini',database:'marymini',host:'db.imad.hasura-app.io',port:'5432',password:DB-PASSWORD
};
var app=express();
app.use(morgan('combined'));

function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;

var htmlTemplate=`
<html>
<head>
<title>${title}</title>
<link href="style.css" rel="stylesheet"/>
</head>
<body>
<div class="container">
<div>
<a href="/"HOME</a>
</div>
<hr/>
<h3>${heading}</h3>
<div>
${content}
</div>
<hr/>
</div>
<script type="text/javascript" src="article.js"></script>
</body>
</html>
`;
return htmlTemplate;
}

app.get('/',function(req,res){
res.sendFile(path.join(_dirname,'','index.html');
});
var pool=new Pool(config);
app.get('/articles/:articleName', function(req,res){
pool.query(@select * from article where title=$1",[req.params.articleName],function(err,result){
if(err){
res.status(500).send(err.toString());
}else{
if(result.rows.length====0){
res.status(404).send('Article Not Found');
} else{
var articleData=result.rows[0];
res.send(createTemplate(articleData));
}
}
});
});

var port=8080;
app.listen(8080,function(){
console.log('IMAD Course onport${port}');
});


