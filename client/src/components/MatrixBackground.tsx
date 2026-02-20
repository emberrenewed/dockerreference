import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Characters to rain down (Katukana + Roman)
    const chars = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ1234567890DOCKE_RCONTAINER";
    const charArray = chars.split("");

    const fontSize = 14;
    const columns = width / fontSize;

    // Array to track the y position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      // Use CSS variables to get current theme colors
      const style = getComputedStyle(document.documentElement);
      const isDark = document.documentElement.classList.contains("dark");
      
      // Get primary color from CSS variable or default to green
      // We need to parse hsl(H S L) to something canvas accepts or just use a helper
      // For simplicity in canvas, let's just stick to a matrix-y color that adapts slightly
      // or check the mode.
      
      const primaryColor = style.getPropertyValue('--color-primary').trim();
      const primaryVal = primaryColor.replace("hsl(", "").replace(")", "").split(" ");
      // Simple HSL to RGB or just use the string if canvas supports it (it usually doesn't support hsl var directly in fillStyle easily without calc)
      // Actually modern browsers support hsl() in canvas.
      
      // Background fade
      // In light mode: Fade to White. In dark mode: Fade to Black/DarkBlue
      if (isDark) {
         ctx.fillStyle = "rgba(4, 9, 21, 0.1)"; // Dark trail
         ctx.fillStyle = `hsl(${style.getPropertyValue('--color-background').trim()} / 0.1)`;
      } else {
         ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // Light trail
      }
      
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono'`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Text Color
        if (isDark) {
            // Dark mode: Primary color text, white highlights
            const color = style.getPropertyValue('--color-primary').trim();
            ctx.fillStyle = Math.random() > 0.95 ? "#FFF" : `hsl(${color})`; 
        } else {
            // Light mode: Dark text, primary highlights
            // Or Primary text?
            const color = style.getPropertyValue('--color-primary').trim();
             // In light mode, matrix rain should probably be the primary color but darker?
             // Or just the primary color.
            ctx.fillStyle = Math.random() > 0.95 ? "#000" : `hsl(${color})`; 
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-25 pointer-events-none"
    />
  );
}
