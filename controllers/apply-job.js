const Job = require("../models/jobs")
const Apply = require("../models/apply")

const causes_singleController = {}

causes_singleController.getItem = (req , res , next) => {
    let id = req.params.id
    Job.getsingleJob(id).then(job => {
        res.render('apply-job' , {
            job,
            message: "",
        })
    })
}

causes_singleController.saveItem = (req , res , next) => {
    let id = req.params.id
    Apply.saveItem(req)
    .then(_ => {
        Job.getsingleJob(id).then(job => {
            res.render('apply-job' , {
                message: "تم التقديم بنجاح",
                job
            })
        })
    })
    .catch(err => {
        Job.getsingleJob(id).then(job => {
            res.render('apply-job' , {
                message: err.message || "خطا في معالجه طلبك",
                job
            })
        })
    })
}


module.exports = causes_singleController