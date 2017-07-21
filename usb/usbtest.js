/**
 * Created by Administrator on 2017/6/16.
 */
const express=require("express");
const http=require("http");
const fs=require("fs");
var dataArray=[];
var dismiss=0;
var count= 0,
    olddata=0;
//usb模块的引入
var usb=require("usb");
    //var num=0;
    //var arr=[];
    var app=express();
    var server=http.createServer(app);
    server.listen(8080);
    app.use(express.static("public"));
    //app.get("/index",function(req,res){
    //    console.log("网页端的请求已经接受");
    //    res.sendFile(__dirname+"/public/index.html");
    //});
    app.get("/msg",function(req,res){
        //console.log(req.query.text);
        //num=req.query.text;
        //arr=num.split(",");
        //arr.map(function(val,index,arr){
        //   arr[index]="0x"+val;
        //    });
        //console.log(arr);
        res.write("msg send ok");
        res.end();
        //******************连接数据
//输出端的设置
        outEndpoint.transferType = 2;
        outEndpoint.transfer([0xa0,0x02,0x2a], function (err) {
            console.log("错误的提示是："+err);
        });
        outEndpoint.on("error",function(){
            console.log("发送数据出错");
        });
        outEndpoint.on("end",function (){
            console.log("发送数据结束了。");
        });
        //console.log(arr);
    });
app.get("/per100",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa8,0x03,0x06,0xb1], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/per20",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa8,0x03,0x04,0xaf], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/per10",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa8,0x03,0x03,0xae], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/per5",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa8,0x03,0x02,0xad], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/per125",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa8,0x03,0x00,0xab], function (err) {
        //console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/start",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa2,0x02,0xa4], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    //console.log(arr);
});
app.get("/end",function(req,res){
    //console.log(req.query.text);
    //num=req.query.text;
    //arr=num.split(",");
    //arr.map(function(val,index,arr){
    //    arr[index]="0x"+val;
    //});
    //console.log(arr);
    res.write("msg send ok");
    res.end();
    //******************连接数据
//输出端的设置
    outEndpoint.transferType = 2;
    outEndpoint.transfer([0xa4,0x02,0xa6], function (err) {
        console.log("错误的提示是："+err);
    });
    outEndpoint.on("error",function(){
        console.log("发送数据出错");
    });
    outEndpoint.on("end",function (){
        console.log("发送数据结束了。");
    });
    console.log(dataArray);
    console.log("dismiss:"+dismiss);
    console.log("count:"+count);
    fs.writeFile("public/data.txt",dataArray,(err)=>{console.log(err)});
});
//*******************************查找设备
var term = usb.findByIds(17224, 21815);
//var term = usb.findByIds(1155,22336 );
//设备打开，以便后续的操作
//console.log(usb.getDeviceList());
term.open();
//console.log(term);
//申明所有的端口
term.interface().claim();
//找出端口的输入输出终端
console.log("$$$$$$$$$")
console.log(term.interfaces)
var endpoints = term.interfaces[0].endpoints,
    inEndpoint = endpoints[0],
    outEndpoint = endpoints[1];
//var endpoints = term.interfaces[1].endpoints,
//    inEndpoint = endpoints[0],
//    outEndpoint = endpoints[1];
//console.log("################")
//console.log(endpoints.length);
//设置输入终端的类型
inEndpoint.transferType = 2;
inEndpoint.startPoll(3,64);
inEndpoint.transfer(64, function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
inEndpoint.on('data', function (buffer) {
    //console.log("接受的数据为："+Bytes2Str(buffer));
    dataArray.push(buffer)
    nowdata=buffer[58];
    count++;
    //console.log(olddata);
    //console.log(nowdata);
    if(nowdata-olddata>1){
        //console.log("差值为："+(nowdata-olddata))
        dismiss++;
    }
    olddata=nowdata;
    //console.log(Bytes2Str(buffer));
    //console.log(buffer.toString("utf-8"));
});
inEndpoint.on('error', function (error) {
    console.log("接受的错误信息为："+error);

});
function Bytes2Str(arr)
{
    var str = "";
    for(var i=0; i<arr.length; i++){
        var tmp = arr[i].toString(16);
        if(tmp.length == 1) {
            tmp = "0" + tmp;
        }
        str += tmp;
        }
        return str;
}