import { Request, Response } from "express";
import CaminhaoService from "./CaminhaoService";
import Caminhao, { ICaminhaoDB } from "../../db/models/Caminhao";


export default class CaminhaoController {
    constructor(private readonly service: CaminhaoService){
    }

    async get(req: Request, res: Response){

        try {

            const result: { data: ICaminhaoDB[], total: number } = await this.service.get(req.query)

            const resultFormatt = Caminhao.fromDBArray(result.data)

            res.status(200).json({result: resultFormatt, total: result.total})

        } catch (error) { 
            console.log(error)
        }


    }

    async update(req: Request, res: Response) {
        
    }
    async create(req: Request, res: Response) {

    }

    async delete(req: Request, res: Response) {

    }



    
}