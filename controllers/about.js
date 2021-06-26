const aboutController = {}

aboutController.getAbout = (req , res , next) => {
    res.render('about-us')
}


module.exports = aboutController