import { clsx } from '@/utils/classname'

type ButtonProps = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  type = 'button',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex h-[40px] items-center justify-center bg-violet-600 px-4 font-bold tracking-wide duration-200 hover:bg-violet-700',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
