import { pool } from "../../db/connection";
import { ICaminhaoDB } from "../../db/models/Caminhao";

export default class CaminhaoService {


  async get(queryParams: any):  Promise<{ data: ICaminhaoDB[]; total: number; }> {

    const { page, pageSize } = queryParams;

    const [countResult] = await pool.query(
      `SELECT COUNT(*) AS total FROM CAMINHAO`
    );

    const total = countResult[0].total;

    const offset = (Number(page) - 1) * Number(pageSize);
    const query = `
      SELECT * FROM CAMINHAO
      ORDER BY ID
      LIMIT ? OFFSET ?;
    `;

    const [rows] = await pool.query(query, [Number(pageSize), Number(offset)]);
    return {
      data: rows as ICaminhaoDB[],
      total,
    }
  }

  async update(id: number, data) {

  }

  async create(data) {

  }

  async delete(id: number) {

  }


}
