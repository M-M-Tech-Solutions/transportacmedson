import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: process.env.MYSQL_DB_HOST || '127.0.0.1',
  port: Number(process.env.MYSQL_DB_PORT) || 3307,
  user: process.env.MYSQL_DB_USER || 'acm_user',
  password: process.env.MYSQL_DB_PASSWORD || 'acm_pass',
  database: process.env.MYSQL_DB_NAME || 'acm_transportes',
});
