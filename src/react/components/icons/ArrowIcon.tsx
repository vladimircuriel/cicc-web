type ArrowIconProps = {
  isOpen: boolean
}

export default function ArrowIcon({ isOpen }: ArrowIconProps) {
  return (
    <svg
      className={`size-3 mt-1 transform ${isOpen ? 'rotate-180' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <title>Arrow</title>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 1l4 4 4-4"
      />
    </svg>
  )
}
