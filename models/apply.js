const mongoose = require('mongoose')

const DB_URL = "mongodb://localhost:27017/app"

let DB_CONFIG = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose.set("useCreateIndex", true);

const Schema = mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "job",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    cv: {
        type: Object,
        required: true,
    },
})

const Apply = mongoose.model('apply' ,Schema )

////////////saveItem////////////

exports.saveItem = (req) => {
    const { file } = req;
    const newitem = new Apply({
        job_id: req.params.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        comment: req.body.comment,
        cv: file
    });
    return new Promise((resolve , reject) => {
        mongoose.connect(DB_URL , DB_CONFIG)
        .then(() => {
            return newitem.save()
        })
        .then(_ => {
            mongoose.disconnect()
            resolve()
        })
        .catch(err => reject(err))
    })
}