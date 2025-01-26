import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, ChevronDown, ChevronUp } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

export const AIAssistant = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card className="glass bg-card/95 shadow-lg h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] w-full p-3 lg:p-4 flex flex-col gap-4 animate-fade-in">
      <Collapsible open={!isCollapsed} className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="h-full mt-4">
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="w-full justify-start mb-4 bg-background/50">
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 h-full flex flex-col gap-4 mt-0">
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
            </TabsContent>

            <TabsContent value="notes" className="flex-1 h-full flex flex-col gap-4 mt-0">
              <div className="flex-1">
                <ScrollArea className="h-full pr-4">
                  <div className="space-y-4">
                    <Card className="p-3 lg:p-4 card-gradient">
                      <p className="text-sm text-muted-foreground">
                        This is your notes section. You can keep track of important points and insights here.
                      </p>
                    </Card>
                  </div>
                </ScrollArea>
              </div>
              
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a note..."
                  className="bg-secondary/50"
                />
                <Button size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};