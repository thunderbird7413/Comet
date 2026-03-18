"use client";

import { useEffect, useMemo, useState } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  opacity: number;
  color: "emerald" | "white";
};

function seededNoise(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function buildStars(count: number, minSize: number, maxSize: number, minOpacity: number, maxOpacity: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const n1 = seededNoise(i * 17.13 + count * 0.11);
    const n2 = seededNoise(i * 31.77 + count * 0.29);
    const n3 = seededNoise(i * 47.51 + count * 0.41);
    const n4 = seededNoise(i * 59.19 + count * 0.67);
    const n5 = seededNoise(i * 73.97 + count * 0.83);

    stars.push({
      left: n1 * 100,
      top: n2 * 100,
      size: minSize + n3 * (maxSize - minSize),
      opacity: minOpacity + n4 * (maxOpacity - minOpacity),
      color: n5 < 0.6 ? "white" : "emerald",
    });
  }
  return stars;
}

export default function HeroStars2D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const farStars = useMemo(() => buildStars(120, 0.8, 1.6, 0.2, 0.45), []);
  const midStars = useMemo(() => buildStars(90, 1.2, 2.4, 0.35, 0.65), []);
  const nearStars = useMemo(() => buildStars(45, 1.8, 3.4, 0.45, 0.85), []);

  if (!mounted) {
    return null;
  }

  const renderLayer = (stars: Star[], className: string) => (
    <div className={className}>
      {stars.map((star, index) => {
        const glow = star.color === "emerald"
          ? "0 0 6px rgba(13, 231, 133, 0.75), 0 0 14px rgba(13, 231, 133, 0.35)"
          : "0 0 6px rgba(255, 255, 255, 0.8), 0 0 14px rgba(255, 255, 255, 0.3)";

        return (
          <span
            key={index}
            className={`hero-star2d hero-star2d--${star.color}`}
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: glow,
            }}
          />
        );
      })}
    </div>
  );

  return (
    <div className="hero-stars2d" aria-hidden>
      {renderLayer(farStars, "hero-stars2d-layer hero-stars2d-layer--far")}
      {renderLayer(midStars, "hero-stars2d-layer hero-stars2d-layer--mid")}
      {renderLayer(nearStars, "hero-stars2d-layer hero-stars2d-layer--near")}
    </div>
  );
}
