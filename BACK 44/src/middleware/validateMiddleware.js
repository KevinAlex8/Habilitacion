const boom = require('@hapi/boom')

const validateMiddleware = (schema, validateWith) => {
    return (req, res, next) => {
        try{
            schema.validateSync(req[validateWith])
            next()
        }catch(e){
            next(boom.badRequest(e.message))
        }
    
    }
}

module.exports = validateMiddleware