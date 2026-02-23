// components/ui/ProjectImage.tsx
"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  return (
    <div className={`relative bg-slate-100 overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => {
          // Hide broken image, show placeholder
          (e.target as HTMLImageElement).style.display = "none";
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Fallback placeholder shown under image */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 -z-10">
        <Building2 className="w-10 h-10 text-slate-300 mb-2" />
        <p className="text-slate-400 text-xs text-center px-4">{alt}</p>
      </div>
    </div>
  );
}
