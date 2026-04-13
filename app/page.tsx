import { getMessagesFromDatabase } from "@/actions/get-message-from-database";
import MessageDisplay from "@/components/message-display";
import MessageForm from "@/components/message-form";

export const runtime="nodejs"

export default async function Home() {
  const messages=await getMessagesFromDatabase();
  return (
    <main className="max-w-2xl mx-auto p-10">
      <MessageForm/>
      <MessageDisplay messages={messages}/>
    </main>
  );
}
