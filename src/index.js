import express from "express";

let port = 3000

const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/" ,indexRouter);
app.use("/api/instrumentos/", instrumentosRouter);
app.use("/api/proyectores/", instrumentosRouter);
app.use("/api/notebooks/", instrumentosRouter);
app.use("/api/libros/", instrumentosRouter);

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})