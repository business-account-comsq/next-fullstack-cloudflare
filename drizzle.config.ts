import { defineConfig } from 'drizzle-kit';
import { config } from 'dotenv';
config({ path: '.env.local' });

export default defineConfig({
  schema: './app/db/schema.ts',
  out: './migrations',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_TOKEN!,
  },
});
