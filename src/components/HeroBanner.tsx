interface HeroBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: string;
}

const HeroBanner = ({ image, title, subtitle, height = "h-[60vh]" }: HeroBannerProps) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        width={1920}
        height={768}
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
