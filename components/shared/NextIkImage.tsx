import Image from "next/legacy/image";

interface NextIkImageProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  priority?: boolean;
  ariaLabel?: string;
  ariaHidden?: boolean;
  className?: string;
  layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down" | undefined;
}

export const NextIkImage: React.FC<NextIkImageProps> = ({
  src,
  width,
  height,
  alt,
  priority = false,
  ariaLabel,
  ariaHidden,
  className,
  layout,
  objectFit,
}) => {
  const baseUrl = "https://ik.imagekit.io/carwiz/web-assets/";
  return (
    <Image
      src={baseUrl + src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      className={className}
      layout={layout}
      objectFit={objectFit}
    />
  );
};
