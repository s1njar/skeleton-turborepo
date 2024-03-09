import { mysqlTable, bigint } from 'drizzle-orm/mysql-core';

export const base = mysqlTable('base', {
  id: bigint('id', { mode: 'number' }).primaryKey().autoincrement(),
});

export type Base = typeof base.$inferSelect;
