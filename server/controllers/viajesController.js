const Viaje = require('../models/Viajes')


exports.viajesController = async (req, res) => {
     const viajes =  await Viaje.findAll()
      res.render('viajes', {
            pagina: 'Proximos viajes',
            viajes: viajes
      })


     
 }

 exports.mostrarViajes = async (req, res) => {
   const viajes =  await Viaje.findByPk(req.params.id)
      res.render('viaje', {
            
      viaje:viaje

      })
  }