interface ICaminhao {
    id: number;
    placa: string;
    renavam: string;
    marca: string;
    modelo: string;
    licenciamento: number;
    aets: string;
    dh_inc: Date;
}

export interface ICaminhaoDB {
  ID: number;
  PLACA: string;
  RENAVAM: string;
  MARCA: string;
  MODELO: string;
  LICENCIAMENTO: number;
  AETS: string;
  DHINC: Date;
}

export default class Caminhao implements ICaminhao {
    id: number
    placa: string
    renavam: string
    marca: string
    modelo: string
    licenciamento: number
    aets: string
    dh_inc: Date


  constructor(data: ICaminhaoDB) {
    this.id = data.ID;
    this.placa = data.PLACA;
    this.renavam = data.RENAVAM;
    this.marca = data.MARCA;
    this.modelo = data.MODELO;
    this.licenciamento = data.LICENCIAMENTO;
    this.aets = data.AETS;
    this.dh_inc = new Date(data.DHINC);
  }


    static fromDBArray(dataArray: ICaminhaoDB[]): Caminhao[] {
        return dataArray.map(data => new Caminhao(data));
    }



}