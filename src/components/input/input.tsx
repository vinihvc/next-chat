type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className='h-[40px] flex-1 bg-input px-2 text-white outline-none'
      {...props}
    />
  )
}
