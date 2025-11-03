import * as SQLite from 'expo-sqlite';
import { drizzle } from 'drizzle-orm/expo-sqlite';

export const expoDB = SQLite.openDatabaseSync('demo', { enableChangeListener: true } );
export const DB = drizzle(expoDB);
