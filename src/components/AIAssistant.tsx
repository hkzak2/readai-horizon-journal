import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export const AIAssistant = () => {
  return (
    <Card className="glass bg-card/95 shadow-lg h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] w-full p-3 lg:p-4 flex flex-col gap-4 animate-fade-in">
      <div className="flex-1">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            <Card className="p-3 lg:p-4 card-gradient">
              <p className="text-sm text-muted-foreground">
                Hello! I'm your AI reading companion. I can help you understand the text better and answer any questions you might have.
              </p>
            </Card>
          </div>
        </ScrollArea>
      </div>
      
      <div className="flex gap-2">
        <Input 
          placeholder="Ask a question..."
          className="bg-secondary/50"
        />
        <Button size="icon" className="shrink-0">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};