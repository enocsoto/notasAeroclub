// import { createPool } from 'mysql2/promise';
import { Sequelize } from 'sequelize';
import envs from './env-config.js';

// export const connection = await createPool({
//     host: envs.db_host,
//     user: envs.db_user,
//     password: envs.db_password,
//     database: envs.db_name,
//     port: envs.db_port
// });

const db = new Sequelize (`${envs.db_name}`, `${envs.db_user}`,`${envs.db_password}`, {
    host: '127.0.0.1',
    port: 3309,
    dialect: 'mysql',
    // logging: false
    
});

export default db;  