import FacebookIcon from '@components/icons/FacebookIcon'
import InstagramIcon from '@components/icons/InstagramIcon'
import LinkedInIcon from '@components/icons/LinkedInIcon'
import LinkTreeIcon from '@components/icons/LinktreeIcon'
import MailIcon from '@components/icons/MailIcon'
import XIcon from '@components/icons/XIcon'

export default function Footer() {
  return (
    <section className="flex justify-center bg-slate-100">
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
          <FooterLink href="https://www.instagram.com/ciccpucmm/">
            <InstagramIcon />
          </FooterLink>
          <FooterLink href="https://www.facebook.com/ciscpucmm">
            <FacebookIcon />
          </FooterLink>
          <FooterLink href="https://www.x.com/ciccpucmm">
            <XIcon />
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/in/ciccpucmm/">
            <LinkedInIcon />
          </FooterLink>
          <FooterLink href="https://linktr.ee/CICCPUCMM">
            <LinkTreeIcon />
          </FooterLink>
          <FooterLink href="mailto:cicc-csti@ce.pucmm.edu.do">
            <MailIcon />
          </FooterLink>
        </div>
      </div>
    </section>
  )
}

type FooterLinkProps = {
  children: React.ReactNode
  href: string
}

function FooterLink({ href, children }: FooterLinkProps) {
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
