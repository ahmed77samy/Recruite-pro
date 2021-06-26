const express = require("express")
const path = require('path')
const app = express()
const router = require("./router/v1");

app.use(express.static(path.join(__dirname , 'assets')))
app.use(express.static(path.join(__dirname , 'public')))

app.set('view engine' , 'ejs')
app.set('views' , 'views') // default


app.use(router)

app.listen(3000,(err) => {
    console.log('server listen on port 3000')
})