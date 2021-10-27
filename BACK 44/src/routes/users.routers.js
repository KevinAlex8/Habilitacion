const {Router} = require('express')
const { createUser, getUsers, updateUser, deleteUser } = require('../controller/users')
const validateMiddleware = require('../middleware/validateMiddleware')
const {createUserSchema, updateUserSchema} = require('../util/schemas/useer')

const router = Router()

router.post('/', validateMiddleware(createUserSchema, 'body'), createUser )
router.patch('/:id', validateMiddleware(updateUserSchema, 'body'), updateUser )
router.get('/', getUsers)
router.delete('/:id', deleteUser)

module.exports = router