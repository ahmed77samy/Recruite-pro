const contactController = {}

contactController.getContact = (req , res , next) => {
    res.render('contact-us')
}


module.exports = contactController