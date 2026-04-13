"use server";

import { getDb } from "@/app/db/index";
import { messages } from "@/app/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteMessageToDatabase(id:number){
    try{
        const db=await getDb();
        await db.delete(messages).where(eq(messages.id,id))
        revalidatePath("/");
    }catch(error){
        console.log(error);
        return {
            ok:false
        };
    }

    return {
        ok:true
    };
}