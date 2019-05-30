const express = require ('express')
const massive = require ('massive')
const app = express()
require('dotenv').config()
const products_controller = require("./products_controller");

app.use(express.json())

//call massive and execute some logic
massive(process.env.CONNECTION_STRING)
    .then(dbInstance =>{
     app.set('db',dbInstance);
     console.log(`Database Connected :)`)
})    .catch(err => console.log(error))

// endpoints that call methods on the controller

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);

// port of the ship, not the bow.  
app.listen(process.env.SERVER_PORT, () => 
    console.log(`Listening on Port ${process.env.SERVER_PORT}`))