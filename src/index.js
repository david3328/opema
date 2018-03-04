const path = require('path')
const cors = require('cors')
const express = require('express')
const app = express()

//import routes
const userRoutes = require('./routes/userRoutes')
const areaRoutes = require('./routes/areaRoutes')
const orderRoutes = require('./routes/orderRoutes')

//Database connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bdopema')
.then(()=>console.log('db is connected'))
.catch(err=>console.log(err))

//settings
app.set('port',process.env.PORT || 3000)


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//routes
app.use('/api/users',userRoutes)
app.use('/api/areas',areaRoutes)
app.use('/api/orders',orderRoutes)

//static files
app.use(express.static(path.join(__dirname,'public')))

//handle errors

//start the server
app.listen(app.get('port'),()=>{console.log(`Server on port ${app.get('port')}`)})