import Image from "next/image";

export type HeroSectionProps = {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional override for the hero height (Tailwind class) */
  heightClass?: string;
  /** Optional wrapper class for the hero container */
  className?: string;
};

export function HeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  heightClass = "h-[50vh] min-h-[400px]",
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center ${className}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">{title}</h1>
        {subtitle ? (
          <p className="mx-auto max-w-2xl text-base text-white/80 md:text-lg">{subtitle}</p>
        ) : null}
      </div>
    </section>
  );
}
