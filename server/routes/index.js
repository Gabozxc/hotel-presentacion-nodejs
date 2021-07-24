const express = require('express')
const router = express.Router()

/*Controladores */
const nosotrosController = require('../controllers/nosotrosController')
const controladorConsultas = require('../controllers/homeController')
const controladorViaje = require('../controllers/viajesController')
const controladorTestimoniales =  require('../controllers/testimonialesController')

module.exports = function(){
      
      router.get('/', controladorConsultas.homeController)

      router.get('/nosotros', nosotrosController.infoNosotros)

      router.get('/viajes',  controladorViaje.viajesController)

      router.get('/viajes/:id', controladorViaje.mostrarViajes);

      router.get('/testimoniales', controladorTestimoniales.testimonialesMostrar)

      router.post('/testimoniales', controladorTestimoniales.imprimirTestimoniales)
    
      return router
      
}  

