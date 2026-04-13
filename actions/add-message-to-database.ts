"use server";

import { getDb } from "@/app/db/index";
import { messages } from "@/app/db/schema";
import { revalidatePath } from "next/cache";

export async function addMessageToDatabase(input:string){
    console.log(input);
    try{
        const db=await getDb();
        await db.insert(messages).values({message:input});
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