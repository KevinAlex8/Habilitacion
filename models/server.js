const express = require('express')
const cors = require('cors')

class Server {
    constructor (){
        this.app = express
        this.port = process.env.PORT
        this.app.usuariosPath='api/usuarios'

        //middlewares()
        //this.app.use(express.json())

        this.middlewares();

        //Rutas de la APP
        this.routes();
        
        //CORS
    }

    middleware(){
        //CORS
        this.app.use(cors())

        //lectura y parseo
        this.app.use(express.json())

        // directorio publico
        this.app.use(express.static('interfaz_ventas'))
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }



    //directorio publico



     listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor conectado")
        })
    }
}

module.exports = Server