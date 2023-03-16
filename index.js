const express = require('express');
const app = express()

app.get('/',(req,res)=>res.send("backend"))

app.listen(process.env.PORT || 3000)
console.log('Server en el puerto',process.env.PORT || 3000)

