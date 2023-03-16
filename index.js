const express = require('express');
const app = express()

app.get('/',(req,res)=>res.send("backend"))

app.listen(process.env.PORT || 3000)
console.log('Server en el puerto',process.env.PORT || 3000)

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://nietzshn:SCTQCvgViMZBnOy1@cluster0.fjmu5cz.mongodb.net/test';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error al conectar a MongoDB Atlas:', err);
  } else {
    console.log('Conectado correctamente a MongoDB Atlas');
    // aquí puedes trabajar con la base de datos
  }
});

const collection = client.db('Henco').collection('Customer');

collection.findOne({ customer : "CLIENTE 1" }, (err, resultado) => {
    if (err) {
      console.error('Error al buscar el documento:', err);
    } else {
      console.log('Resultado de la búsqueda:', resultado);
    }
  });