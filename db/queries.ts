import { DB } from './DB';
import { usersTable } from './schema';

// insert
export async function createUser(name: string, email: string, age?: number) {
    await DB.insert(usersTable).values({ name, email, age }).run();
}

// select all
export async function getUsers() {
    const rows = await DB.select().from(usersTable).all();
    return rows;
}
