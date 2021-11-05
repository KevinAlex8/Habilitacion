
const {Router} = require('express')

const {usuariosGet,  
      usuariosDelete,
      usuariosPost



} = require('../controladores/usuarios')


const router = Router()

router.get('/', usuariosGet)
router.post('/', usuariosDelete)
router.delete('/:id', usuariosPost)

module.exports= router