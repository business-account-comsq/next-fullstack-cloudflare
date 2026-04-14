import { drizzle } from "drizzle-orm/libsql/web";
import { createClient } from "@libsql/client/web";

const globalForDb = globalThis as unknown as {
  client?: ReturnType<typeof createClient>;
};

const client =
  globalForDb.client ??
  createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  });

globalForDb.client = client;

export const db = drizzle(client);