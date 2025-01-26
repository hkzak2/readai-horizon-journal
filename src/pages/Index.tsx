import { ReadingArea } from "@/components/ReadingArea";
import { AIAssistant } from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col lg:flex-row">
      <div className="flex-1 p-4 lg:p-6">
        <ReadingArea />
      </div>
      <div className="w-full lg:w-[400px] p-4 lg:p-6">
        <AIAssistant />
      </div>
    </div>
  );
};

export default Index;