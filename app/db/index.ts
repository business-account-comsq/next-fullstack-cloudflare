import { drizzle } from "drizzle-orm/libsql/web";
import { createClient } from "@libsql/client/web";

export function getDb() {
  console.log("① getDb start");
  console.log("② env check", {
    hasUrl: !!process.env.DATABASE_URL,
    hasToken: !!process.env.DATABASE_TOKEN,
  });
  const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  });
  console.log("③ client created");
  return drizzle(client);
}
