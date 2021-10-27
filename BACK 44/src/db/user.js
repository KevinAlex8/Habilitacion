const User = require('../models/User')

const users =[
    new User('adiministrador','autorizado', 'juan', 'juan@gmail.com', '123456'),
    new User('vendedor','no autorizado', 'jhon', 'jhon@gmail.com', 'abcde'),
    new User('vendedor','pendiente', 'toby', 'toby@gmail.com', 'b3d3b')
]

module.exports = users