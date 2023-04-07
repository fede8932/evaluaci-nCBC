import * as dotenv from 'dotenv';

dotenv.config();

export const dbConfig: any = {
  host: process.env.POSTGRES_HOST,
  db: process.env.POSTGRES_DB,
  dbPort: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  pass: process.env.POSTGRES_PASSWORD,
};
