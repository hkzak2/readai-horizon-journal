import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, ArrowLeft, Plus, List } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { Card } from "./ui/card";

export const AIAssistant = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Card className="glass bg-card/95 shadow-lg h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] w-full p-3 lg:p-4 flex flex-col gap-4 animate-fade-in">
      <Collapsible open={!isCollapsed} className="flex-1">
        <div className="flex items-center justify-between border-b pb-2">
          <h2 className="text-lg font-semibold">AI Assistant</h2>
          <CollapsibleTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ArrowLeft className={`h-4 w-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent className="h-full mt-4">
          <Tabs defaultValue="chat" className="h-full flex flex-col">
            <TabsList className="w-full grid grid-cols-2 mb-4 bg-background/50">
              <TabsTrigger value="chat" className="flex items-center gap-2">Chat</TabsTrigger>
              <TabsTrigger value="notes" className="flex items-center gap-2">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 h-full flex flex-col gap-4 mt-0">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  <Card className="p-3 lg:p-4 card-gradient">
                    <p className="text-sm text-muted-foreground">
                      Hello! I'm your AI reading companion. I can help you understand the text better and answer any questions you might have.
                    </p>
                  </Card>
                </div>
              </ScrollArea>
              
              <div className="flex gap-2 mt-auto pt-4 border-t">
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
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <List className="h-4 w-4" />
                      <span>Your Notes</span>
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Note
                    </Button>
                  </div>
                  <Card className="p-3 lg:p-4 card-gradient">
                    <p className="text-sm text-muted-foreground">
                      No notes yet. Click the "Add Note" button to create your first note.
                    </p>
                  </Card>
                </div>
              </ScrollArea>
              
              <div className="flex gap-2 mt-auto pt-4 border-t">
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