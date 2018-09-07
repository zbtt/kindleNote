
var koa=require('koa');
var app=koa();
var controller=require('koa-route');
var views=require('co-views');
var render=views('./view',{
	map:{html:'ejs'}
});
var koa_static=require('koa-static-server');
var service=require('./service/switchJSON.js');

// app.use(controller.get('/',function* (){
// this.body=service.get_note();
// }));
 app.use(koa_static({
	rootDir:'./static/',
	rootPath:'/static/',
	maxage:0
}));
app.use(controller.get('/',function* (){
	this.set('Cache-Control','no-cache');
	this.body=yield render('index',{title:'kindle note'});
}));
app.use(controller.get('/ajax/index',function* (){
	this.set('Cache-Control','no-cache');
	this.body=service.get_note();
}));
app.listen(3000);