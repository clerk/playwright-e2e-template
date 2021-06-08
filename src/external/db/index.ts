/** 
 * 
 * If you need to depend on a certain database with test seed data, interactions with the database
 * could be all grouped here, keeping the suite as clean as possible.
 * 
  
  import { Pool } from "pg";

  const pool = new Pool({
    connectionString: process.env.DB_URL,
  });

  export async function query(queryString: any, params: any) {
    const res = await pool.query(queryString, params);
    return res;
  }

  export async function getClient() {
    const client = await pool.connect();
    return client;
  }

  export function disconnect() {
    return pool.end();
  }
 * 
 */
