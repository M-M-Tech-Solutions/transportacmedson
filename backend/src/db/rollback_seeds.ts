import { pool } from './connection';

async function rollback() {
  const connection = await pool.getConnection();
  try {
    console.log('🧹 Limpando Caminhoes...');
    await connection.query('DELETE FROM CAMINHAO');

    console.log('✅ Todas as seeds limpas!');
  } catch (err) {
    console.error('❌ Erro ao limpar seeds:', (err as Error).message);
  } finally {
    connection.release();
    process.exit();
  }
}

rollback();
