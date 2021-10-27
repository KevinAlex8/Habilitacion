const yup = require('yup')

const emailUserSchema = yup.string().email().min(5)
const estadoUserSchema = yup.string().min(4)
const rolUserSchema = yup.string().min(4)
const nicknameUserSchema  = yup.string().min(2)
const passwordUserSchema = yup.string().min(5)

const createUserSchema = yup.object().shape({
    email: emailUserSchema.required(),
    estado: estadoUserSchema.required(),
    rol: rolUserSchema.required(),
    nickname: nicknameUserSchema.required(),
    password: passwordUserSchema.required()
})

const updateUserSchema = yup.object().shape({
    email: emailUserSchema.required(),
    estado: emailUserSchema.required(),
    rol: rolUserSchema.required(),
    nickname: nicknameUserSchema.required(),
    password: passwordUserSchema.required()
})

module.exports = {
    createUserSchema,
    updateUserSchema   
}