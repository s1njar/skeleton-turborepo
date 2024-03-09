import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';

const { DB_HOST: host, DB_USER: username, DB_PW: password } = process.env;

if (!host || !username || !password) {
  throw new Error('Some of env variables are missing');
}

const connection = connect({
  host,
  username,
  password,
});

export const db = drizzle(connection);
