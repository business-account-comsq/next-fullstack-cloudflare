import { drizzle } from "drizzle-orm/libsql/web";
import { createClient } from "@libsql/client/web";

export function getDb() {
  const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  });

  return drizzle(client);
}
