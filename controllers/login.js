const loginController = {}

loginController.getLogin = (req , res , next) => {
    res.render('login')
}


module.exports = loginController