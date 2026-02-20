import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Terminal, Copy, Check, Info, Lightbulb, ExternalLink, Play, Monitor, Command, Server, Layout } from "lucide-react";
import type { DockerTopic } from "@/lib/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TopicModalProps {
  topic: DockerTopic | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TopicModal({ topic, open, onOpenChange }: TopicModalProps) {
  const [activeTab, setActiveTab] = useState("linux");

  if (!topic) return null;

  const currentCommand = topic.osCommand?.[activeTab as keyof typeof topic.osCommand] || topic.command;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] md:max-w-5xl bg-background/95 backdrop-blur-3xl border border-primary/20 text-foreground p-0 gap-0 overflow-hidden shadow-[0_0_50px_-12px_rgba(var(--primary),0.25)] h-[85vh] md:h-[90vh] max-h-[90vh] flex flex-col rounded-xl">
        
        <div className="flex flex-col h-full overflow-hidden relative">
          {/* Background Grid Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <DialogHeader className="p-6 pb-4 md:p-8 md:pb-6 border-b border-border bg-muted/20 shrink-0 relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="outline" className="font-mono text-primary border-primary/30 bg-primary/5 px-2 py-0.5 md:px-3 md:py-1 rounded-sm shadow-[0_0_10px_rgba(var(--primary),0.2)] text-[10px] md:text-xs">
                // {topic.category.toUpperCase()}
              </Badge>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-[10px] md:text-xs text-muted-foreground border border-border px-2 py-1 rounded bg-background/50">
                  ID: {topic.id.toString().padStart(3, '0')}
                </span>
              </div>
            </div>
            <DialogTitle className="text-2xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-2 md:mb-3">
              {topic.topic}
            </DialogTitle>
            <DialogDescription className="text-sm md:text-lg text-muted-foreground font-mono leading-relaxed max-w-2xl">
              {topic.description}
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex-1 p-0 relative z-10">
            <div className="space-y-6 md:space-y-10 max-w-4xl mx-auto p-4 md:p-8 pb-12">
              
              {/* OS Selection Tabs */}
              <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm py-2 -mx-4 px-4 md:-mx-8 md:px-8 border-b border-border/50 mb-6">
                 <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-muted-foreground font-mono uppercase tracking-wider hidden md:block">
                      System Configuration
                    </h4>
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
                      <TabsList className="bg-muted border border-border w-full md:w-auto p-1 h-auto grid grid-cols-3 md:flex gap-1">
                        <TabsTrigger value="linux" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary font-mono text-xs py-1.5">
                           <Terminal className="w-3 h-3 mr-2 inline" /> LINUX
                        </TabsTrigger>
                        <TabsTrigger value="windows" className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-500 font-mono text-xs py-1.5">
                           <Layout className="w-3 h-3 mr-2 inline" /> WINDOWS
                        </TabsTrigger>
                        <TabsTrigger value="mac" className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-500 font-mono text-xs py-1.5">
                           <Command className="w-3 h-3 mr-2 inline" /> MACOS
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                 </div>
              </div>

              {/* Main Description */}
              <div className="space-y-3 md:space-y-4">
                 <h4 className="text-sm font-bold text-accent flex items-center gap-2 font-mono uppercase tracking-wider">
                  <Info className="w-4 h-4" />
                  System Overview
                </h4>
                <div className="p-6 rounded-lg bg-card border border-card-border shadow-sm">
                  <p className="leading-relaxed text-card-foreground/90 text-base md:text-lg">
                    {topic.longDescription}
                  </p>
                </div>
              </div>

              {/* OS Specifics - Context based on selection */}
              <AnimatePresence mode="wait">
                {topic.osSpecific && (
                  <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2"
                  >
                    <h4 className="text-sm font-bold text-primary flex items-center gap-2 font-mono uppercase tracking-wider">
                      <Monitor className="w-4 h-4" />
                      {activeTab.toUpperCase()} Context
                    </h4>
                    <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 text-sm md:text-base text-muted-foreground border-l-4 border-l-primary">
                      {topic.osSpecific[activeTab as keyof typeof topic.osSpecific] || "Standard Docker behavior applies for this platform."}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Primary Command - Dynamic based on OS */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 font-mono uppercase tracking-wider">
                  <Terminal className="w-4 h-4" />
                  Primary Command
                </h4>
                <div className="rounded-lg overflow-hidden border border-primary/30 shadow-[0_0_20px_rgba(var(--primary),0.1)] bg-black/90">
                  <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">
                      {activeTab === 'windows' ? 'PowerShell' : 'bash'}
                    </span>
                  </div>
                  <CodeBlock code={currentCommand || ""} primary />
                </div>
              </div>

               {/* Multiple Usage Examples */}
               <div className="space-y-6">
                <h4 className="text-sm font-bold text-secondary flex items-center gap-2 font-mono uppercase tracking-wider">
                  <Play className="w-4 h-4" />
                  Example Scenarios
                </h4>
                
                {topic.examples && topic.examples.length > 0 ? (
                  <div className="grid gap-6">
                    {topic.examples.map((example, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider pl-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          {example.title}
                        </div>
                        {example.description && (
                          <p className="text-sm text-muted-foreground pl-1 mb-2">{example.description}</p>
                        )}
                        <div className="rounded-lg overflow-hidden border border-border bg-black/80 shadow-lg hover:border-primary/30 transition-colors">
                          <CodeBlock code={example.code} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Fallback for old data structure
                  <div className="rounded-lg overflow-hidden border border-border bg-black/80 shadow-lg">
                     <CodeBlock code={topic.usage || ""} />
                  </div>
                )}
              </div>

            </div>
          </ScrollArea>
          
          <div className="p-4 border-t border-border bg-background/80 flex justify-between items-center backdrop-blur-xl shrink-0 relative z-20">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM STATUS: ONLINE
            </div>
            <button 
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 bg-secondary/10 hover:bg-secondary/20 border border-secondary/20 rounded text-xs font-mono transition-all text-secondary active:scale-95"
            >
              [ESC] CLOSE_MODAL
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CodeBlock({ code, primary = false }: { code: string, primary?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group p-0">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={copy}
          className="p-2 hover:bg-white/10 rounded-md transition-colors bg-black/50 border border-white/10 backdrop-blur-md"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-400" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </button>
      </div>
      <div className="max-h-[400px] overflow-auto custom-scrollbar">
        <pre className={`p-6 font-mono text-sm leading-relaxed ${primary ? 'text-primary font-bold' : 'text-gray-300'}`}>
          <code className="whitespace-pre-wrap break-all block min-h-[1.5em]">{code}</code>
        </pre>
      </div>
    </div>
  );
}
