import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export function getDb() {
  const client = createClient({
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  });

  return drizzle(client);
}
/*import { drizzle } from 'drizzle-orm/libsql';


export function getDb(){
  return drizzle({
    connection: {
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_TOKEN!,
    }
  });
}*/

