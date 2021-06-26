const Job = require("../models/jobs")
const categories = require("../assets/js/categories")
const homeController = {}

homeController.getHome = (req , res , next) => {
    Job.getLatstJobs().then(jobs => {
        res.render('index' , {
            categories,
            jobs
        })
    })
}


module.exports = homeController