import { useEffect, useRef } from 'react';

export function InteractiveMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = { x: 0.72, y: 0.45, active: false };
    let frame = 0;
    let animationId = 0;
    let lastFrameTime = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function onPointerMove(event) {
      pointer.x = event.clientX / Math.max(window.innerWidth, 1);
      pointer.y = event.clientY / Math.max(window.innerHeight, 1);
      pointer.active = true;
    }

    function onPointerLeave() {
      pointer.active = false;
    }

    function draw(time = 0) {
      animationId = 0;

      if (document.hidden) {
        return;
      }

      if (!prefersReducedMotion && time - lastFrameTime < 33) {
        animationId = window.requestAnimationFrame(draw);
        return;
      }

      lastFrameTime = time;
      frame += prefersReducedMotion ? 0 : 0.032;
      ctx.clearRect(0, 0, width, height);

      const pulseX = width * (pointer.active ? pointer.x : 0.72);
      const pulseY = height * (pointer.active ? pointer.y : 0.48);
      const cols = width < 700 ? 26 : 42;
      const rows = width < 700 ? 13 : 18;
      const startX = width * (width < 700 ? -0.22 : 0.08);
      const endX = width * 1.1;
      const baseY = height * (width < 700 ? 0.68 : 0.61);
      const amplitude = height * (width < 700 ? 0.105 : 0.13);
      const rowGap = height * (width < 700 ? 0.026 : 0.024);
      const points = [];

      for (let row = 0; row < rows; row += 1) {
        const rowPoints = [];
        const rowOffset = row - rows / 2;
        for (let col = 0; col < cols; col += 1) {
          const t = col / (cols - 1);
          const x = startX + (endX - startX) * t;
          const pull = Math.max(0, 1 - Math.hypot(x - pulseX, baseY - pulseY) / Math.max(width * 0.82, 1));
          const wave =
            Math.sin(t * 8.8 + row * 0.36 + frame * 1.35) * amplitude +
            Math.sin(t * 15 + frame * 0.82) * amplitude * 0.24;
          const perspective = Math.pow(t, 1.45) * height * 0.18;
          const y = baseY + rowOffset * rowGap + wave - perspective - pull * 58;
          rowPoints.push({ x, y, t, pull });
        }
        points.push(rowPoints);
      }

      const glow = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, width * 0.5);
      glow.addColorStop(0, 'rgba(0, 212, 255, 0.16)');
      glow.addColorStop(0.38, 'rgba(123, 61, 255, 0.08)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      function strokeLine(from, to, alphaBoost = 0) {
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `rgba(168, 85, 255, ${0.18 + alphaBoost})`);
        gradient.addColorStop(0.58, `rgba(59, 130, 255, ${0.22 + alphaBoost})`);
        gradient.addColorStop(1, `rgba(0, 212, 255, ${0.3 + alphaBoost})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.75 + (from.pull + to.pull) * 1.3;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      }

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols - 1; col += 1) {
          strokeLine(points[row][col], points[row][col + 1], row / rows > 0.5 ? 0.03 : 0);
        }
      }

      for (let row = 0; row < rows - 1; row += 1) {
        for (let col = 0; col < cols; col += 3) {
          strokeLine(points[row][col], points[row + 1][col], 0);
        }
      }

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 2) {
          const point = points[row][col];
          const dotAlpha = 0.24 + point.pull * 0.58 + point.t * 0.18;
          ctx.fillStyle = `rgba(0, 212, 255, ${dotAlpha})`;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.1 + point.pull * 2.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    }

    function startAnimation() {
      if (!animationId) {
        animationId = window.requestAnimationFrame(draw);
      }
    }

    function onVisibilityChange() {
      if (document.hidden) {
        window.cancelAnimationFrame(animationId);
        animationId = 0;
        return;
      }

      resize();
      lastFrameTime = 0;
      if (prefersReducedMotion) {
        draw();
      } else {
        startAnimation();
      }
    }

    resize();
    if (prefersReducedMotion) {
      draw();
    } else {
      startAnimation();
    }

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-90"
      aria-hidden="true"
    />
  );
}
