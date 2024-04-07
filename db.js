// const { default: postgres } = await import('postgres')
import postgres from 'postgres'
import 'dotenv/config'
// import { config } from 'dotenv';
// config();

// const postgres = require('postgres');
// require('dotenv').config();


let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 3333,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});


export default sql
