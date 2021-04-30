function cal(val1,cb)
{
    var result = val1;
    cb(result);


        var result = val1 - 1;
        cb(result);

}

cal(10,function(result){
    console.log(result);
})