import { drizzle } from 'drizzle-orm/libsql';


export function getDb(){
  return drizzle({
    connection: {
      url: process.env.DATABASE_URL!,
      authToken: process.env.DATABASE_TOKEN!,
    }
  });
}

