type TitleProps = {
  children: React.ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <h2 className="font-bold text-center text-6xl lg:text-7xl text-primary py-10 [text-shadow:_4px_4px_0_rgb(0_0_0_/_40%)]">
      {children}
    </h2>
  )
}
