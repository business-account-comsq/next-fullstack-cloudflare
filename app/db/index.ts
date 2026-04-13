export async function getDb() {
  const { drizzle }=await import("drizzle-orm/libsql/web");
  const { createClient }=await import ("@libsql/client/web");
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

