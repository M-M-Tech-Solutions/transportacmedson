import express, { Application } from "express";
import cors from "cors";
import route from "./routes/router";

const app: Application = express();

const allowedOrigins = ['http://localhost:5173', 'https://your-frontend-domain.com'];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins
};


app.use(express.json())
app.use(cors(corsOptions))

app.use("/api", route)

export default app;