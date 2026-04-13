import { drizzle } from "drizzle-orm/libsql/web";
import { createClient } from "@libsql/client/web";

const globalForDb = globalThis as any;

export const db =
  globalForDb.db ??
  (() => {
    console.log("DB INIT");

    const client = createClient({
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_TOKEN!,
    });

    const db = drizzle(client);

    globalForDb.db = db;
    return db;
  })();
