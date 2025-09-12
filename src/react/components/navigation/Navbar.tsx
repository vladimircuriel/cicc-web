import useNavbar from '@lib/hooks/useNavbar'

export default function Navbar() {
  const { pathname, navbarRef, isMenuOpen: isOpen, setIsMenuOpen: setIsOpen } = useNavbar()

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 flex items-center w-full p-4 bg-accent">
      {/* Desktop */}
      <div className="items-center justify-between hidden w-full lg:flex">
        <HomePageLink />
        <InnerNav
          className="flex items-center mx-auto font-medium text-white lg:flex-row gap-x-16"
          pathname={pathname}
        />
      </div>
      {/* Mobile */}
      <div className="flex flex-col items-center w-full lg:hidden">
        <div className="flex items-center justify-between w-full">
          <HomePageLink />
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <InnerNav
            className="flex flex-col items-center justify-start w-full p-4 font-medium text-white gap-y-4"
            pathname={pathname}
          />
        )}
      </div>
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
      className={`w-full
        ${
          active
            ? 'bg-secondary text-white rounded-full shadow px-3 py-1'
            : 'lg:hover:mt-[-3px] transition-transform'
        }
      `}
    >
      <a className={`transition-colors ${active ? '' : 'hover:text-secondary'}`} href={href}>
        {label}
      </a>
    </li>
  )
}

function HomePageLink() {
  return (
    <a href="/#inicio">
      <img
        src="/favicon.webp"
        alt="cicc-logo"
        loading="lazy"
        decoding="async"
        className="size-12"
      />
    </a>
  )
}

type InnerNavProps = {
  pathname: string
  className?: string
}

function InnerNav({ pathname, className }: InnerNavProps) {
  return (
    <ul className={className}>
      <NavItem href="/" label="Inicio" pathname={pathname} />
      <NavItem href="/actividades" label="Actividades" pathname={pathname} />
      <NavItem href="/gestiones" label="Gestiones" pathname={pathname} />
    </ul>
  )
}

type MenuButtonProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function MenuButton({ isOpen, setIsOpen }: MenuButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white transition-transform rounded-lg lg:hidden hover:scale-110"
      aria-controls="navbar-default"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Abrir menú principal</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  )
}
