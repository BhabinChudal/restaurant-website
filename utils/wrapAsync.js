module.exports=function wrapAsync(fn){
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
} // wrapAsync function has function in callback and returns function as well. The function being returned primary goal is to execute the function in parameter.