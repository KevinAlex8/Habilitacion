const users = require('../db/user')
const User = require('../models/User')

const createUser = (req, res) =>{
    const{rol, estado, nickname, email, password} = req.body
    const newUser = new User(rol, estado, nickname, email, password)
    users.push(newUser)
    res.status(201).json({
        data: newUser,
        message: "Usuario creado",
        statusCode: 201
    })
}

const updateUser = (req, res) => {
    const{rol, estado, nickname, email, password} = req.body
    const {id} = req.params
    users[id].rol = rol
    users[id].estado = estado
    users[id].email = email
    users[id].nickname = nickname
    users[id].password = password
    const userUpdate = {rol, estado, nickname, email, password}
    res.status(200).json({
        data: userUpdate,
        message: "Usuario actualizado",
        statusCode: 200
    })
}

const getUsers = (req, res) => {
    res.status(200).json({
        data: users,
        message: "Usuarios encontrados",
        statusCode: 200
    })
}

const deleteUser = (req, res ) => {
    const {id} = req.params
    users.splice(id, 1)
    res.status(200).json({
        message: "Usuario eliminado",
        statusCode:200
    })
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}