import path from "path";
import { writeFile, readFile, rename, unlink } from "fs/promises";

const __dirname = import.meta.dirname;

const pathFile = path.join(__dirname, "../data");

const crearArchivo = async (req, res) => {
    try {
        const { archivo, contenido } = req.query;
        const fecha = new Date().toLocaleString();

        await writeFile(path.join(pathFile, `${archivo}.txt`), `${fecha} --- ${contenido}`);

        res.send("documento creado con exito");
    } catch (err) {
        console.error(err);
        return res.send("algo salio mal");
    }
};

const leerArchivo = async (req, res) => {
    try {
        const { archivo } = req.query;
        const documento = await readFile(path.join(pathFile, `${archivo}.txt`), "utf-8");
        res.send(documento);
    } catch (err) {
        console.error(err);
        return res.send("algo salio mal");
    }
};

const renombrarArchivo = async (req, res) => {
    try {
        const { nombre, nuevoNombre } = req.query;
        const rutaAntigua = path.join(pathFile, `${nombre}.txt`);
        const rutaNueva = path.join(pathFile, `${nuevoNombre}.txt`);

        await rename(rutaAntigua, rutaNueva);

        res.send("Renombrado con exito");
    } catch (err) {
        console.error(err);
        return res.send("algo salio mal");
    }
};

const eliminarArchivo = async (req, res) => {
    try {
        const { archivo } = req.query;
        const ruta = path.join(pathFile, `${archivo}.txt`);
        await unlink(ruta);
        res.send("Archivo eliminado con éxito");
    } catch (err) {
        console.error(err);
        return res.send("algo salio mal");
    }
};

export const allMethods = {
    crearArchivo,
    leerArchivo,
    renombrarArchivo,
    eliminarArchivo,
};
