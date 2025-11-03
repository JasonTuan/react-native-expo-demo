import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

export const DB_NAME = 'demo'
export const expoDB = SQLite.openDatabaseSync(DB_NAME, { enableChangeListener: true } )
export const DB = drizzle(expoDB)
