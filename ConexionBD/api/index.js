const express = require('express') 
const cors = require('cors')
const mysql= require('./src/bd/bd');
const clientes = require("./src/routes/clientes");

const app = express() 

const port = 3000 

app.use(
    express.urlencoded({
        extended:true
    })
);

app.use(express.json({extended: true}));

app.use(cors());

// Rutas de los metodos 
app.use('/Clientes',clientes);
//app.use('/AddClientes/AddClientes',clientes);


// Lo que indicamos con esto, lo que le estamos diciendo es que la aplicacion esccuche en este puerto, en este caso en el 3000, entonces ejecute este codigo de adentro. 
app.listen(port,()=>{
    console.log(`Estoy ejecutandome en http://localhost:${port}`)
});





