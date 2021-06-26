const router = require('express').Router()
const upload = require("../config/multer");

const homeController = require('../controllers/home')
const loginController = require('../controllers/login')
const aboutController = require('../controllers/about')
const servicesController = require('../controllers/services')
const jobsController = require('../controllers/jobs')
const jobs_singleController = require('../controllers/jobs-single')
const apply_jobController = require('../controllers/apply-job')
const contactController = require('../controllers/contact')

router.get('/', homeController.getHome)
router.get('/login', loginController.getLogin)
router.get('/about-us', aboutController.getAbout)
router.get('/services', servicesController.getServices)
router.get('/current-jobs', jobsController.getJobs)
router.get('/current-search', jobsController.getJobs)
router.get('/current-search/:keyword', jobsController.getSearch)
router.get('/job-single/:id', jobs_singleController.getItem)
router.get('/apply-job/:id', apply_jobController.getItem)
router.post('/apply-job/:id', upload , apply_jobController.saveItem)
router.get('/contact-us', contactController.getContact)

module.exports = router
