/**
 * This is the custom error class which extends Error class and creates object with statuscode and message
 */

class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.message=message; //unlike java, you dont have to define properties outside constructor. THis work will be automatically be done by javascript
        this.statusCode=statusCode;
    }
}

module.exports=ExpressError;