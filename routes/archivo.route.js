import { allMethods } from "../controllers/archivo.controller.js";
import { Router } from "express";

const router = Router();

router.get("/crear", allMethods.crearArchivo);

router.get("/leer", allMethods.leerArchivo);

router.get("/renombrar", allMethods.renombrarArchivo);

router.get("/eliminar", allMethods.eliminarArchivo);

export default router;
