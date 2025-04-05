
import React, { useEffect, useRef } from 'react';
import { useGlobal } from '@/contexts/GlobalContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground: React.FC = () => {
  const { isDarkMode } = useGlobal();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 5 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const updateParticles = () => {
      particles.current.forEach(particle => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX *= -1;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY *= -1;
        }

        // Mouse interaction: attract particles towards mouse position
        const dx = mousePosition.current.x - particle.x;
        const dy = mousePosition.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const forceX = dx / 5000;
          const forceY = dy / 5000;
          particle.speedX += forceX;
          particle.speedY += forceY;
        }

        // Limit speed
        const maxSpeed = 1;
        const speed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
        if (speed > maxSpeed) {
          particle.speedX = (particle.speedX / speed) * maxSpeed;
          particle.speedY = (particle.speedY / speed) * maxSpeed;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        ctx.beginPath();
        
        // Use purple for particles, adjusted for dark/light mode
        const color = isDarkMode 
          ? `rgba(124, 58, 237, ${particle.opacity})` 
          : `rgba(124, 58, 237, ${particle.opacity * 0.7})`;
          
        ctx.fillStyle = color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      ctx.strokeStyle = isDarkMode 
        ? 'rgba(124, 58, 237, 0.15)' 
        : 'rgba(124, 58, 237, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        mousePosition.current.x = e.touches[0].clientX;
        mousePosition.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas 
      ref={canvasRef}
      className="interactive-bg"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
