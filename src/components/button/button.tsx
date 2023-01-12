type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  type = 'button',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className="h-[40px] font-bold bg-violet-600 text-white px-4 tracking-wide hover:bg-violet-700 duration-200"
      {...props}
    >
      {children}
    </button>
  )
}
