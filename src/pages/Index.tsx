import { ReadingArea } from "@/components/ReadingArea";
import { AIAssistant } from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 p-6">
        <ReadingArea />
      </div>
      <div className="p-6">
        <AIAssistant />
      </div>
    </div>
  );
};

export default Index;