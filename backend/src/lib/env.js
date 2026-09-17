import dotenv from "dotenv";

dotenv.config();
export const ENV = {
    PORT : process.env.Port,
    DB_URL : process.env.Db_URl,
    NODE_ENV: process.env.NODE_ENV,
};