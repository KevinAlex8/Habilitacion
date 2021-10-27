const boom = require('@hapi/boom')

const errorMiddleware = (error,req,res,next) => {
    let errorObject = {};
    if(error.isBoom){
        const {output: {statusCode, payload}} = error
        errorObject = {statusCode, ...payload};
    }else{
        errorObject = {
            statusCode: 500,
            error: 'Internal Server Error',
            message: 'Algo salio mal'
        }
    }   
    console.log(error)
    res.status(errorObject.statusCode).json(errorObject)
}

module.exports = errorMiddleware