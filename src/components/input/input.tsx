type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className='h-[40px] w-full flex-1 rounded-full bg-input px-4 outline-none'
      {...props}
    />
  )
}
