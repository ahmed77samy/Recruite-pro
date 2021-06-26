const servicesController = {}

servicesController.getServices = (req , res , next) => {
    res.render('services')
}


module.exports = servicesController