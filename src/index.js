import express from "express";
import bodyParser from "body-parser";

import indexRouter from "./routers/index.router.js";
import instrumentosRouter from "./routers/instrumentos.router.js";
import proyectoresRouter from "./routers/proyectores.router.js";
import notebooksRouter from "./routers/notebooks.router.js";
import librosRouter from "./routers/libros.router.js";

let port = 3000

const app = express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/" ,indexRouter);
app.use("/api/instrumentos/", instrumentosRouter);
app.use("/api/proyectores/", proyectoresRouter);
app.use("/api/notebooks/", notebooksRouter);
app.use("/api/libros/", librosRouter);

app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})