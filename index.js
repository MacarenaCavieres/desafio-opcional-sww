import express from "express";
import path from "path";
import archivoRouter from "./routes/archivo.route.js";

const app = express();

const __dirname = import.meta.dirname;

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", archivoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
    console.log(`http://localhost:${PORT}`);
});
