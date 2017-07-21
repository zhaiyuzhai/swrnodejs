/**
 * Created by Administrator on 2017/6/21.
 */
arr=[1,2,3];
arr.map((val,index,arr)=>{
    val=val+1;
    console.log(val);
    console.log(index);
    console.log(arr);
});
console.log(arr);
var a=10;
console.log(parseInt(getInt16(a)))