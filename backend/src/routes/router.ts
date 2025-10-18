import { Router, Request, Response  } from "express";
import caminhaoRoute from "./caminhaoRoute";


const route = Router()

route.use(caminhaoRoute)

export default route;
