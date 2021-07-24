//Archio de configuracion


//importar express

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const configs = require('./config')
const config = configs[app.get('env')]
app.locals.titulo = config.nombresitio


require('dotenv').config({path: 'variables.env'})


app.use((req, res, next) => {

      const fecha = new Date()
      res.locals.fechaActual = fecha.getFullYear()
      res.locals.ruta = req.path


      
      console.log(res.locals)
      return next()
})



app.use(bodyParser.urlencoded({extended: true}))


app.use('/', routes())
app.set('view engine', 'pug')
app.use(express.static('public'))
app.set('views', path.join(__dirname, './views'))
/* puertos hijos para la app*/

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
      console.log('El servido esta fino')
})



