import fs from 'fs';
import path from 'path';
import { pool } from './connection';

async function runMigrations() {
  const migrationsDir = path.resolve('src/db/migrations');
  const files = fs.readdirSync(migrationsDir).sort();

  const connection = await pool.getConnection();

  try {
    for (const file of files) {
      const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf-8');
      console.log(`🧩 Executando migration: ${file}`);
      await connection.query(sql);
    }
    console.log('✅ Todas as migrations foram aplicadas com sucesso!');
  } catch (err) {
    console.error('❌ Erro ao executar migrations:', (err as Error).message);
  } finally {
    connection.release();
    process.exit();
  }
}

runMigrations();
