import { clsx } from '@/utils/classname'

type ContainerProps = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Container = ({
  className,
  children,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx('container mx-auto px-4 md:px-6 w-full', className)}
      {...props}
    >
      {children}
    </div>
  )
}
