const Testimonial = require('../models/Testimoniales')

exports.testimonialesMostrar = async (req, res) => {
   const testimoniales = await Testimonial.findAll()
   res.render('testimoniales', {
      pagina: 'Testimoniales',
      testimoniales: testimoniales
      })
       
 } 

 exports.imprimirTestimoniales = async (req, res) => {
           
      let {nombre, correo, mensaje} = req.body

      let errores = []
      if(!nombre){
            errores.push({'mensaje': 'agrega tu nombre'})
      }
      if(!correo){
            errores.push({'mensaje': 'agrega tu correo'})
      }
      if(!mensaje){
            errores.push({'mensaje': 'agrega tu mensaje'})
      }

      if(errores.length > 0){
           const testimonial = await Testimonial.findAll()
           res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje
      })
          

            
      }else {
            const testimonial = await Testimonial.create({
                  nombre,
                  correo,
                  mensaje

            })
            res.redirect('/testimoniales')
      }



    
}