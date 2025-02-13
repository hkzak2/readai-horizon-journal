import { useState } from "react";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Play, Pause, Mic } from "lucide-react";

export const ReadingArea = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] w-full max-w-4xl mx-auto gap-4">
      <Card className="flex-1 glass bg-card shadow-lg p-4 lg:p-8 animate-fade-in">
        <ScrollArea className="h-full pr-4">
          <div className="prose prose-lg prose-slate max-w-none">
            <h1 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-balance">
              Welcome to ReadAI
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              ReadAI transforms the traditional reading experience into an intelligent, focused journey through knowledge. Our platform combines advanced artificial intelligence with a carefully crafted minimalist interface to create a reading environment that feels both futuristic and naturally intuitive.
            </p>
            <p className="text-base lg:text-lg leading-relaxed text-muted-foreground">
              The design philosophy emphasizes focus and clarity while incorporating subtle technological elements that enhance rather than distract from the reading experience.
            </p>
          </div>
        </ScrollArea>
      </Card>
      
      <Card className="glass bg-card/95 shadow-lg p-3 lg:p-4 animate-slide-in">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:bg-primary/10"
            >
              {isPlaying ? <Pause className="h-4 lg:h-5 w-4 lg:w-5" /> : <Play className="h-4 lg:h-5 w-4 lg:w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10"
            >
              <Mic className="h-4 lg:h-5 w-4 lg:w-5" />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            00:00 / 05:30
          </div>
        </div>
      </Card>
    </div>
  );
};