import { motion } from "framer-motion";
import { 
  Terminal, Box, ArrowRight, Layers, FileCode, Network, 
  HardDrive, Cloud, Zap, Shield, Activity, GitMerge, 
  Milestone, Code, BookOpen 
} from "lucide-react";
import type { DockerTopic } from "@/lib/data";

interface TopicCardProps {
  topic: DockerTopic;
  onClick: (topic: DockerTopic) => void;
  index: number;
}

// Map categories to specific icons for visual richness
const getCategoryIcon = (category: string) => {
  if (category.includes("Fundamentals")) return <BookOpen className="w-4 h-4" />;
  if (category.includes("Images")) return <Layers className="w-4 h-4" />;
  if (category.includes("Containers")) return <Box className="w-4 h-4" />;
  if (category.includes("Dockerfile")) return <FileCode className="w-4 h-4" />;
  if (category.includes("Networking")) return <Network className="w-4 h-4" />;
  if (category.includes("Storage")) return <HardDrive className="w-4 h-4" />;
  if (category.includes("Registry")) return <Cloud className="w-4 h-4" />;
  if (category.includes("Optimization")) return <Zap className="w-4 h-4" />;
  if (category.includes("Security")) return <Shield className="w-4 h-4" />;
  if (category.includes("Monitoring")) return <Activity className="w-4 h-4" />;
  if (category.includes("CI/CD")) return <GitMerge className="w-4 h-4" />;
  if (category.includes("Next Steps")) return <Milestone className="w-4 h-4" />;
  if (category.includes("PHP") || category.includes("Laravel")) return <Code className="w-4 h-4" />;
  return <Box className="w-4 h-4" />;
};

export function TopicCard({ topic, onClick, index }: TopicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.05,
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick(topic)}
      className="group relative cursor-pointer h-[260px] flex flex-col"
    >
      {/* Intense Backdrop Glow (Revealed on Hover) */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      {/* Main Card Surface */}
      <div className="relative h-full w-full bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 overflow-hidden flex flex-col transition-all duration-500 group-hover:border-primary/50 group-hover:bg-[#0a0a0a]/95 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
        
        {/* Subtle inner grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Top Gradient Flare */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Card Header (Category & ID) */}
        <div className="relative flex justify-between items-start mb-4 z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/30 transition-colors duration-300 shadow-sm">
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              {getCategoryIcon(topic.category)}
            </span>
            <span className="text-xs font-mono font-bold text-gray-300 group-hover:text-primary transition-colors tracking-wide">
              {topic.category.toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-muted-foreground/60 font-medium tracking-widest uppercase">
              INDEX
            </span>
            <span className="text-sm font-mono text-primary/70 font-bold group-hover:text-primary transition-colors shadow-sm">
              {topic.id.toString().padStart(3, '0')}
            </span>
          </div>
        </div>

        {/* Card Body (Title & Desc) */}
        <div className="relative z-10 flex-1 flex flex-col">
          <h3 className="text-xl md:text-2xl font-display font-extrabold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary/80 transition-all duration-300 line-clamp-2">
            {topic.topic}
          </h3>
          <p className="text-sm text-gray-400 font-sans leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors">
            {topic.description}
          </p>
        </div>

        {/* Card Footer (Terminal Block) */}
        <div className="relative z-10 mt-auto pt-4">
          <div className="w-full bg-black/80 rounded-xl border border-white/5 overflow-hidden group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(var(--primary),0.15)] transition-all duration-300">
            {/* Fake Mac window dots */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="ml-2 text-[9px] font-mono text-muted-foreground/50 uppercase">sh</span>
            </div>
            
            {/* Command Text */}
            <div className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-primary/70 w-[80%]">
                <Terminal className="w-3.5 h-3.5 shrink-0 text-primary" />
                <span className="truncate group-hover:text-primary transition-colors font-medium">
                  {topic.command || "View System Data"}
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-black group-hover:scale-110 transition-all duration-300">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
