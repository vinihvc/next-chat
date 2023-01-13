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
      className='h-[40px] bg-violet-600 px-4 font-bold tracking-wide text-white duration-200 hover:bg-violet-700'
      {...props}
    >
      {children}
    </button>
  )
}
