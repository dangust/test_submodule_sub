import 'dotenv/config';
import { DataSource } from 'typeorm';

const config = {
  type: 'postgres',
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  username: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE_NAME,
  migrations: ['src/migrations/*{.ts,.js}'],
  entities: ['src/entities/**/*.entity{.ts,.js}'],
};

export const dataSource = new DataSource({ ...config, type: 'postgres' });

export default {
  ...config,
  seeds: ['src/database/seeds/*{.ts,.js}'],
  factories: ['src/database/factories/*{.ts,.js}'],
};
