"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    const calculateProgress = () => {
      if (!mounted) return;

      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    const timer = setTimeout(() => {
      calculateProgress();
    }, 0);

    window.addEventListener("scroll", calculateProgress);

    return () => {
      mounted = false;
      clearTimeout(timer);
      window.removeEventListener("scroll", calculateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-blue-600 via-[#0A4F8A] to-[#78BE43] transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
