const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require("./routes/user")
const app = express()
//middleware
app.use('/api',userRoutes)
app.use(express.json())

app.listen(process.env.PORT || 3000)
console.log('Server en el puerto',process.env.PORT || 3000)

mongoose.connect("mongodb+srv://nietzshn:SCTQCvgViMZBnOy1@cluster0.fjmu5cz.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("Conectado a mongodb atlas")).catch((error)=>console.error(error))

