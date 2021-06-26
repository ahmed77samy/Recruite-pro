const Job = require("../models/jobs")

const causes_singleController = {}

causes_singleController.getItem = (req , res , next) => {
    let id = req.params.id
    Job.getsingleJob(id).then(job => {
        res.render('job-single' , {
            job
        })
    })

}


module.exports = causes_singleController