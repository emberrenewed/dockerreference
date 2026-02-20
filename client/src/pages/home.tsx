import { useState, useMemo } from "react";
import { MatrixBackground } from "@/components/MatrixBackground";
import { TopicCard } from "@/components/TopicCard";
import { TopicModal } from "@/components/TopicModal";
import { ThemeSelector } from "@/components/ThemeSelector";
import { dockerTopics, type DockerTopic } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Search, Command, Github, UserCircle } from "lucide-react";

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<DockerTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(dockerTopics.map((t) => t.category)))];

  const filteredTopics = useMemo(() => {
    return dockerTopics.filter((topic) => {
      const matchesSearch =
        topic.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || topic.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground relative overflow-hidden flex flex-col font-sans">
      <MatrixBackground />

      <header className="relative z-10 p-4 md:p-12 border-b border-white/5 backdrop-blur-md sticky top-0 bg-background/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-6 md:mb-8">
            <div className="space-y-2 text-center md:text-left w-full md:w-auto flex-1">
              <h1 className="text-3xl md:text-6xl font-bold tracking-tighter font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-in fade-in slide-in-from-bottom-4 duration-700">
                DOCKER_PROTOCOL
              </h1>
              <p className="text-muted-foreground font-mono text-xs md:text-base animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 flex items-center justify-center md:justify-start gap-2">
                // MASTERY_ROADMAP_V1.0.5 // ACCESS_GRANTED
              </p>
            </div>

            <div className="w-full md:w-auto flex items-center justify-center md:justify-end gap-3 md:gap-4 animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              
              <ThemeSelector />

              {/* Creator Icon Link */}
              <a 
                href="https://ahmadmuhammet.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:-translate-y-1"
                title="Created by emberdev"
              >
                <UserCircle className="w-5 h-5" />
              </a>

              <div className="relative w-full md:w-96 group">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                </div>
                <Input
                  placeholder="Search protocols..."
                  className="pl-10 bg-black/40 border-white/10 focus-visible:ring-primary/50 font-mono h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-white/10 bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                  </kbd>
                </div>
              </div>
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mask-fade animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
             {categories.map((cat) => (
               <button
                 key={cat}
                 onClick={() => setActiveCategory(cat)}
                 className={`
                   px-4 py-2 rounded-md text-xs font-mono whitespace-nowrap transition-all border
                   ${activeCategory === cat 
                     ? "bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                     : "bg-card/50 border-white/5 text-muted-foreground hover:border-primary/50 hover:text-foreground hover:bg-white/5"}
                 `}
               >
                 {cat.toUpperCase()}
               </button>
             ))}
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 p-4 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {filteredTopics.map((topic, idx) => (
                <TopicCard
                  key={topic.id}
                  topic={topic}
                  index={idx}
                  onClick={setSelectedTopic}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <div className="w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Search className="w-8 h-8 opacity-50" />
              </div>
              <p className="font-mono text-lg">NO_DATA_FOUND_FOR_QUERY</p>
              <p className="text-sm mt-2 opacity-50">Try adjusting your search filters</p>
            </div>
          )}
        </div>
      </main>

      <footer className="relative z-10 py-6 border-t border-white/5 text-center bg-background/50 backdrop-blur-sm flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground font-mono">
          SYSTEM_ID: REPLIT_AGENT // <span className="text-primary animate-pulse">ONLINE</span>
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Created by <a href="https://ahmadmuhammet.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:underline transition-all font-semibold">emberdev</a>
        </p>
      </footer>

      <TopicModal
        topic={selectedTopic}
        open={!!selectedTopic}
        onOpenChange={(open) => !open && setSelectedTopic(null)}
      />
    </div>
  );
}
