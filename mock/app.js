var app=require('express')();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
    var origin = "*";

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Set-Cookie, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});
var mockData=require('./mock-data');
app.use('/mock',function(req,res){
	console.log(req.me)
	res.send(mockData.table);
});


app.listen(3000,function () {
    console.log('server');
});