import useHero from '@lib/hooks/useHero'

export default function Hero() {
  const { heroData, isLoading } = useHero()

  return (
    <section className="relative h-[80dvh] bg-white">
      {heroData?.image && (
        <img
          src={heroData.image}
          alt="Comité de Ingeniería en Ciencias de la Computación - Hero"
          className="absolute inset-0 z-0 object-cover w-full h-full"
          loading="eager"
          decoding="async"
        />
      )}

      <div className="relative z-10 flex items-center justify-start px-4 h-full w-full bg-[linear-gradient(110deg,#00589b_20%,#001b3060_100%)]">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <h1 className="text-5xl font-bold text-center text-pretty text-white [text-shadow:_5px_6px_0_rgb(0_0_0_/_40%)] w-full lg:text-6xl">
            <span className="text-secondary">COMITÉ</span> DE <br />
            INGENIERÍA EN <br /> CIENCIAS DE LA <br />
            <span className="text-secondary">COMPUTACIÓN</span>
          </h1>
          {heroData?.form && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={heroData.form}
              className="px-6 py-2 transition-transform rounded-full bg-secondary hover:scale-105 hover:bg-secondary/95"
            >
              <span className="text-lg font-medium text-center text-white">
                Forma parte del comité
              </span>
            </a>
          )}
        </div>
        <div className="absolute items-center hidden lg:flex gap-x-6 bottom-4 right-4">
          <img
            src="/pucmm.webp"
            alt="pucmm-logo"
            className="size-28 lg:size-44"
            loading="eager"
            decoding="async"
          />
          <img
            src="/favicon.webp"
            alt="cicc-logo"
            className="size-28 lg:size-44"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
