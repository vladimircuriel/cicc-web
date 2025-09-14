import FacebookIcon from '@components/icons/FacebookIcon'
import InstagramIcon from '@components/icons/InstagramIcon'
import LinkedInIcon from '@components/icons/LinkedInIcon'
import LinkTreeIcon from '@components/icons/LinktreeIcon'
import MailIcon from '@components/icons/MailIcon'
import XIcon from '@components/icons/XIcon'
import useFooter from '@lib/hooks/useFooter'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const { footerData } = useFooter()

  return (
    <section className="flex flex-col justify-center p-5 bg-slate-100">
      <div className="flex items-center justify-evenly">
        <div className="flex flex-col items-center gap-4 justify-evenly">
          <div className="flex items-center justify-center gap-6">
            <a href="/">
              <img
                src="/favicon.webp"
                alt="CICC Logo"
                className="size-24 md:size-32"
                loading="eager"
                decoding="async"
              />
            </a>
            <a href="https://www.pucmm.edu.do/" target="_blank" rel="noopener noreferrer">
              <img
                src="/pucmm.webp"
                alt="PUCMM Logo"
                className="size-24 md:size-32"
                loading="eager"
                decoding="async"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <p className="text-lg font-semibold text-center md:text-3xl whitespace-nowrap text-primary">
                <span className="text-secondary">Comité </span>de Estudiantes de
              </p>
              <p className="text-lg font-semibold text-center md:text-3xl whitespace-nowrap text-primary">
                Ingeniería en Ciencias de la
                <span className="text-secondary"> Computación</span>
              </p>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            {footerData?.instagram && (
              <FooterIconLink href={footerData.instagram}>
                <InstagramIcon />
              </FooterIconLink>
            )}
            {footerData?.facebook && (
              <FooterIconLink href={footerData.facebook}>
                <FacebookIcon />
              </FooterIconLink>
            )}
            {footerData?.x && (
              <FooterIconLink href={footerData.x}>
                <XIcon />
              </FooterIconLink>
            )}
            {footerData?.linkedin && (
              <FooterIconLink href={footerData.linkedin}>
                <LinkedInIcon />
              </FooterIconLink>
            )}
            {footerData?.linktree && (
              <FooterIconLink href={footerData.linktree}>
                <LinkTreeIcon />
              </FooterIconLink>
            )}
            {footerData?.email && (
              <FooterIconLink href={footerData.email}>
                <MailIcon />
              </FooterIconLink>
            )}
          </div>
        </div>
        <div>
          <h2 className="mb-6 font-bold uppercase text-primary">Recursos Externos</h2>
          <ul className="font-medium text-gray-500">
            {footerData?.career && <FooterLink href={footerData.career}>Carrera</FooterLink>}
            {footerData?.pensum && <FooterLink href={footerData.pensum}>Pensum</FooterLink>}
            {footerData?.clubs && <FooterLink href={footerData.clubs}>Club</FooterLink>}
            {footerData?.internship && (
              <FooterLink href={footerData.internship}>Pasantías</FooterLink>
            )}
          </ul>
        </div>
      </div>
      <hr className="w-3/4 mx-auto my-6 border-gray-300 border-t-1" />
      <div className="flex items-center justify-center mb-20 md:mb-0">
        <span className="text-sm text-black sm:text-center">
          Copyright© {CURRENT_YEAR}{' '}
          <a href="/" className="transition-colors hover:text-primary">
            CICC
          </a>
        </span>
      </div>
    </section>
  )
}

type FooterLinkProps = {
  children: React.ReactNode
  href: string
}

function FooterIconLink({ href, children }: FooterLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-105"
    >
      {children}
    </a>
  )
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li className="mb-4">
      <a className="hover:underline" href={href}>
        {children}
      </a>
    </li>
  )
}
