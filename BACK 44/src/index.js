const app = require('./app')


app.listen(app.get('PORT'), () =>{
    console.log(`Server started on port ${app.get('PORT')}`)
})