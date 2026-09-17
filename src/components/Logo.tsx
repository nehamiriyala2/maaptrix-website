import Image from "next/image";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

/**
 * Single source of truth for the Maaptrix logo asset.
 * Swap /public/brand/logo.svg with the provided brand file — every
 * usage across the site (navbar, footer, etc.) renders from here.
 */
export default function Logo({
  className = "",
  imageClassName = "h-9 w-9",
  showWordmark = true,
  wordmarkClassName = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/logo-original.jpeg"
        alt="Maaptrix"
        width={480}
        height={480}
        priority
        className={`${imageClassName} object-contain`}
      />
      {showWordmark && (
        <span
          className={`font-display font-bold tracking-tight text-brand-navy ${wordmarkClassName}`}
        >
          Maaptrix
        </span>
      )}
    </span>
  );
}
