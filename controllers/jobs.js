const Job = require("../models/jobs")
const categories = require("../assets/js/categories")
const jobsController = {}

jobsController.getJobs = (req , res , next) => {
    Job.getJobs().then(jobs => {
        res.render('current-jobs',{jobs,categories})
    })
}

jobsController.getSearch = (req , res , next) => {
    let keyword = req.params.keyword
    Job.getSearch(keyword).then(jobs => {
        res.render('current-jobs',{jobs,categories})
    })
}


module.exports = jobsController