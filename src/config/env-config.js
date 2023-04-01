import { config } from "dotenv";

config();
const envs = {
    port: process.env.PORT,
    db_host: process.env.DB_HOST,
    db_user: process.env.DB_USER,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    db_port: process.env.DB_PORT,
    db_mongo: process.env.MONGO_DB

}
export default envs;