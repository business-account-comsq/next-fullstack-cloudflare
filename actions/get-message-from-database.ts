"use server";

import { getDb } from "@/app/db/index";
import { messages } from "@/app/db/schema";

export async function getMessagesFromDatabase() {
    const db=getDb();
    const response=await db.select().from(messages);
    return response;
}