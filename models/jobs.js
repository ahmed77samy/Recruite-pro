const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/app"

mongoose.set("useCreateIndex", true);

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    f_description: {
        type: String,
        required: true,
    },
    filter: {
        type: Array
    }
})

const Job = mongoose.model('job' ,Schema )

////////////getJobs////////////

exports.getJobs = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Job.find().sort([["_id", -1]])
        }).then(jobs => {
            mongoose.disconnect()
            resolve(jobs)
        }).catch(err => reject(err))
    })
}

////////////getLatstJobs////////////

exports.getLatstJobs = () => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Job.find().limit(4).sort([["_id", -1]])
        }).then(jobs => {
            mongoose.disconnect()
            resolve(jobs)
        }).catch(err => reject(err))
    })
}

////////////getsingleJob////////////

exports.getsingleJob = (id) => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Job.findById(id)
        }).then(job => {
            mongoose.disconnect()
            resolve(job)
        }).catch(err => reject(err))
    })
}

////////////getSearch////////////

exports.getSearch = (keyword) => {
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL).then(() => {
            return Job.find({
                filter: `${keyword}`
            })
        }).then(job => {
            mongoose.disconnect()
            resolve(job)
        }).catch(err => reject(err))
    })
}