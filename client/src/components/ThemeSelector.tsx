import { useState, useEffect } from "react";
import { Palette, Moon, Sun, Check } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const themes = [
  { name: "Matrix Green", value: "160 84% 39%", hex: "#10b981" },
  { name: "Cyber Blue", value: "217 91% 60%", hex: "#3b82f6" },
  { name: "Neon Purple", value: "270 95% 65%", hex: "#a855f7" },
  { name: "Alert Red", value: "0 84% 60%", hex: "#ef4444" },
  { name: "Warning Orange", value: "25 95% 53%", hex: "#f97316" },
  { name: "Caution Yellow", value: "48 96% 53%", hex: "#eab308" },
  { name: "Vapor Pink", value: "322 81% 55%", hex: "#ec4899" },
  { name: "Tron Cyan", value: "190 90% 50%", hex: "#06b6d4" },
  { name: "Deep Teal", value: "173 58% 39%", hex: "#14b8a6" },
  { name: "Electric Indigo", value: "262 80% 50%", hex: "#6366f1" },
  { name: "Lime Wire", value: "84 81% 44%", hex: "#84cc16" },
  { name: "Hot Magenta", value: "300 100% 50%", hex: "#d946ef" },
];

export function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [primaryColor, setPrimaryColor] = useState("160 84% 39%");

  useEffect(() => {
    setMounted(true);
    // Initialize from local storage or default
    const storedMode = (localStorage.getItem("theme-mode") as "light" | "dark") || "dark";
    const storedColor = localStorage.getItem("theme-color") || "160 84% 39%";
    
    setMode(storedMode);
    setPrimaryColor(storedColor);
    applyTheme(storedMode, storedColor);
  }, []);

  const applyTheme = (newMode: "light" | "dark", newColor: string) => {
    const root = document.documentElement;
    
    // 1. Handle Light/Dark Mode
    root.classList.remove("light", "dark");
    root.classList.add(newMode);

    if (newMode === "dark") {
      root.style.setProperty("--color-background", "hsl(224 71% 4%)");
      root.style.setProperty("--color-foreground", "hsl(213 31% 91%)");
      root.style.setProperty("--color-card", "hsl(224 71% 6% / 0.7)");
      root.style.setProperty("--color-card-foreground", "hsl(213 31% 91%)");
      root.style.setProperty("--color-card-border", "hsl(224 71% 15%)");
      root.style.setProperty("--color-muted", "hsl(223 47% 11%)");
      root.style.setProperty("--color-muted-foreground", "hsl(215 20% 65%)");
      root.style.setProperty("--color-border", "hsl(216 34% 17%)");
      root.style.setProperty("--color-input", "hsl(216 34% 17%)");
    } else {
      root.style.setProperty("--color-background", "hsl(220 14% 94%)"); // Gray background for depth
      root.style.setProperty("--color-foreground", "hsl(240 10% 3.9%)");
      root.style.setProperty("--color-card", "hsl(0 0% 98%)"); // Slightly lighter gray/white for cards
      root.style.setProperty("--color-card-foreground", "hsl(240 10% 3.9%)");
      root.style.setProperty("--color-card-border", "hsl(240 5.9% 90%)");
      root.style.setProperty("--color-muted", "hsl(240 4.8% 95.9%)");
      root.style.setProperty("--color-muted-foreground", "hsl(240 3.8% 46.1%)");
      root.style.setProperty("--color-border", "hsl(240 5.9% 90%)");
      root.style.setProperty("--color-input", "hsl(240 5.9% 90%)");
    }

    // 2. Handle Accent Colors
    // Ensure we handle both raw values (for Tailwind) and HSL strings (for CSS vars)
    const rawValue = newColor.replace(/hsl\(|\)/g, "");
    const hslValue = `hsl(${rawValue})`;

    // Set variables on :root (html) and body to ensure specificity override
    [root, document.body].forEach(el => {
      el.style.setProperty("--color-primary", hslValue);
      el.style.setProperty("--color-accent", hslValue);
      // Also set raw channels if needed by some Tailwind configs
      el.style.setProperty("--primary", rawValue); 
      el.style.setProperty("--accent", rawValue);
    });

    console.log(`Theme Applied: ${newMode} with color ${hslValue}`);
    
    // Save to storage
    localStorage.setItem("theme-mode", newMode);
    localStorage.setItem("theme-color", rawValue);
  };

  const handleModeChange = (newMode: "light" | "dark") => {
    setMode(newMode);
    applyTheme(newMode, primaryColor);
  };

  const handleColorChange = (newColor: string) => {
    setPrimaryColor(newColor);
    applyTheme(mode, newColor);
  };

  if (!mounted) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-black/40 hover:bg-white/10 hover:text-primary transition-colors">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-black/95 backdrop-blur-xl border-white/10 p-4 rounded-xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
        <div className="space-y-4">
          
          {/* Mode Toggle */}
          <div className="space-y-2">
            <h4 className="font-medium text-xs text-muted-foreground font-mono uppercase tracking-wider">Appearance</h4>
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/5">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "flex-1 h-8 rounded-md transition-all font-mono text-xs",
                  mode === "light" ? "bg-white text-black shadow-sm" : "text-muted-foreground hover:text-white"
                )}
                onClick={() => handleModeChange("light")}
              >
                <Sun className="h-3.5 w-3.5 mr-2" />
                LIGHT
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "flex-1 h-8 rounded-md transition-all font-mono text-xs",
                  mode === "dark" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-white"
                )}
                onClick={() => handleModeChange("dark")}
              >
                <Moon className="h-3.5 w-3.5 mr-2" />
                DARK
              </Button>
            </div>
          </div>
          
          <Separator className="bg-white/10" />
          
          {/* Color Grid */}
          <div className="space-y-3">
            <h4 className="font-medium text-xs text-muted-foreground font-mono uppercase tracking-wider">Interface Color</h4>
            <div className="grid grid-cols-6 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleColorChange(theme.value)}
                  className={cn(
                    "group relative h-8 w-8 rounded-full border-2 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20",
                    primaryColor === theme.value 
                      ? "border-white scale-110 shadow-[0_0_10px_rgba(255,255,255,0.3)]" 
                      : "border-transparent opacity-80 hover:opacity-100"
                  )}
                  style={{ backgroundColor: `hsl(${theme.value})` }}
                  title={theme.name}
                >
                  {primaryColor === theme.value && (
                    <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow-md stroke-[3]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
