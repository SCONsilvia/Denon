import express, { Express, Request, Response } from "npm:express";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts"; //importamos dotenv

const app: Express = express();

app.use(express.json());

app.get("/", (req: Request, res: Response)=>{
    res.send("Hola Deno desde expresss!");
});

app.post("/", (req: Request, res: Response)=>{
    console.log(req.body);
    res.send(`Listo`);
});

app.listen(config().PORT);
console.log(`Server ok en el puerto ${config().PORT}`);
