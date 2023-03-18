import { createPool } from 'mysql2/promise';
import envs from './env-config.js';


export const connection = await createPool({
    host: envs.db_host,
    user: envs.db_user,
    password: envs.db_password,
    database: envs.db_name,
    port: envs.db_port
});

