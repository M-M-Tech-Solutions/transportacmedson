import fs from 'fs';
import path from 'path';
import { pool } from './connection';

async function runSeeds() {
  const seedsDir = path.resolve('src/db/seeds');
  const files = fs.readdirSync(seedsDir).sort();

  const connection = await pool.getConnection();

  try {
    for (const file of files) {
      const sql = fs.readFileSync(path.join(seedsDir, file), 'utf-8');
      console.log(`🧩 Executando seed: ${file}`);
      await connection.query(sql);
    }
    console.log('✅ Todos os seeds aplicados com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao executar seeds:', (err as Error).message);
  } finally {
    connection.release();
    process.exit();
  }
}

runSeeds();
