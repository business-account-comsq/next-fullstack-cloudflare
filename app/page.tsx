import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto p-10">
      <div className="flex flex-col justify-center gap-3">
        <Input placeholder="This is my input component" />
        <Button>Submit</Button>
      </div>
      <div className="p-5">
        <ul>
          <li>This is first message</li>
          <li>This is second message</li>
          <li>This is third message</li>
        </ul>
      </div>
    </main>
  );
}
