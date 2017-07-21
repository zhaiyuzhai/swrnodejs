/**
 * Created by zhaiyu on 2017/6/22.
 */
const buf = new Buffer([0xa0,0x02,0x2a,0x55,0x55,0x55,0x55,0x55]);
const buf1 = new Buffer([0xa8,0x03,0x03,0xae,0x55,0x55,0x55,0x55,0x55]);//10ms级别
const buf2 = new Buffer([0xa8,0x03,0x04,0xaf,0x55,0x55,0x55,0x55,0x55]);//20ms级别
const bufStart= new Buffer([0xa2,0x02,0xa4,0x55,0x55,0x55,0x55,0x55]);
const bufEnd= new Buffer([0xa4,0x02,0xa6,0x55,0x55,0x55,0x55,0x55]);
var dismiss=0;
var count= 0,
olddata=0;
var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();
var mydeviceAddress='8C:DE:52:C4:23:76',
    bname='SD43128332';
btSerial.on('found', function(address, bname){
    console.log(address);
    if(address==mydeviceAddress){
        btSerial.findSerialPortChannel(address, function(channel) {
            console.log('***'+address);
            console.log('***'+channel);
            btSerial.connect(address,channel, function() {
                console.log('connected');
                //btSerial.write(buf, function(err, bytesWritten) {
                //    console.log("##########");
                //    //打印出已经写入到设备的字节数
                //    console.log(bytesWritten);
                //    if (err) console.log(err);
                //});
                btSerial.write(buf2, function(err, bytesWritten) {
                    console.log("##########");
                    //打印出已经写入到设备的字节数
                    console.log(bytesWritten);
                    if (err) console.log(err);
                });
                btSerial.write(bufStart, function(err, bytesWritten) {
                    console.log("##########");
                    //打印出已经写入到设备的字节数
                    console.log(bytesWritten);
                    if (err) console.log(err);
                });
                setTimeout(function(){
                    btSerial.write(bufEnd, function(err, bytesWritten) {
                        console.log("dismiss:"+dismiss);
                        console.log("count"+count);
                        //console.log("##########");
                        ////打印出已经写入到设备的字节数
                        //console.log(bytesWritten);
                        if (err) console.log(err);
                    });
                },2000);
                //btSerial.write(bufEnd, function(err, bytesWritten) {
                //    console.log("##########");
                //    //打印出已经写入到设备的字节数
                //    console.log(bytesWritten);
                //    if (err) console.log(err);
                //});
                btSerial.on('data', function(buffer) {
                    //console.log("********");
                    //console.log(buffer[58]);
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
                btSerial.on("failure",function(err){
                    console.log(err);
                })
            },errConnect);
            // close the connection when you're ready
            //btSerial.close();
        }, errFind);
    }
});
btSerial.inquire();
function errConnect() {
    console.log('cannot connect to mydevice');
}
function errFind() {
    console.log('the search finished but no serial port channel was found,please try again');
};
//btSerial.on('data', function(buffer) {
//    console.log("********");
//    console.log(buffer.toString(16));
//});
btSerial.on("close", function () {
    console.log("连接已经被终止")
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