import React, { useEffect, useRef } from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      // Set canvas to full screen
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Characters - Shapes (Square, Triangle, Circle)
      const letters = '■□▲△●○';
      const fontSize = 6;
      const columns = canvas.width / fontSize;
  
      // Array to keep track of y position of drops
      // Initialize drops based on column count
      const drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
  
      const draw = () => {
        const isDark = document.documentElement.classList.contains('dark');

        // Fade effect - Theme aware
        ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        // Blue & White Color Palette
        // Dark Mode: Bright Sky Blues & Pure White
        const darkColors = ['#0EA5E9', '#38BDF8', '#BAE6FD', '#FFFFFF']; 
        // Light Mode: Deep Navy & Rich Blues (for contrast against white bg)
        const lightColors = ['#0C4A6E', '#0369A1', '#0284C7', '#2563EB'];

        for (let i = 0; i < drops.length; i++) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          
          // Randomly select a color from the appropriate palette
          const colors = isDark ? darkColors : lightColors;
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          // Reset drop to top randomly after it has crossed screen
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i]++;
        }
      };
  
      const interval = setInterval(draw, 33);
  
      const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        className="absolute top-0 opacity-30 left-0 w-full h-full pointer-events-none z-0"
      />
    );
};

export default MatrixRain;
