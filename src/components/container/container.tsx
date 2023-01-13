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
      className={clsx('container mx-auto w-full px-4 md:px-6', className)}
      {...props}
    >
      {children}
    </div>
  )
}
