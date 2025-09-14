type ImageDividerProps = {
  image?: string
}

export default function ImageDivider({ image = 'divider-banner.webp' }: ImageDividerProps) {
  return (
    <div className="relative h-56 overflow-hidden w-dvw md:h-72 bg-primary">
      <img
        src={image}
        alt="Divider"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 object-cover w-full h-full opacity-30"
      />
    </div>
  )
}
