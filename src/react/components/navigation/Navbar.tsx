import useNavbar from '@lib/hooks/useNavbar'

export default function Navbar() {
  const { pathname } = useNavbar()

  return (
    <nav className="fixed top-0 flex items-center w-full p-4 bg-accent">
      <a href="/#inicio">
        <img
          src="/favicon.webp"
          alt="cicc-logo"
          loading="lazy"
          decoding="async"
          className="size-12"
        />
      </a>
      <ul className="flex items-center mx-auto font-medium text-white lg:flex-row gap-x-16 ">
        <NavItem href="/" label="Inicio" pathname={pathname} />
        <NavItem href="/actividades" label="Actividades" pathname={pathname} />
        <NavItem href="/gestiones" label="Gestiones" pathname={pathname} />
      </ul>
    </nav>
  )
}

type NavItemProps = {
  href: string
  label: string
  pathname: string
}

function NavItem({ href, label, pathname }: NavItemProps) {
  const active = pathname === href
  return (
    <li
      className={
        active
          ? 'bg-secondary text-white rounded-full shadow px-3 py-1'
          : 'lg:hover:mt-[-3px] transition-transform'
      }
    >
      <a className={`transition-colors ${active ? '' : 'hover:text-secondary'}`} href={href}>
        {label}
      </a>
    </li>
  )
}
