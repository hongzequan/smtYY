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
// 登录接口
app.use('/Public/checkLogin',function(req,res){
    // console.log(req.body)
    // console.log(req.body.name)
    // if(req.body.name=='hongzequan' && req.body.password=='123123'){
         res.send(mockData.loginY);
    //  }else{
    //     res.send(mockData.loginN);
    //  }
});
app.use('/customer',function(req,res){
   res.send(mockData.customer);
});

app.listen(3000,function () {
    console.log('server');
});