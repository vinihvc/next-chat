type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className="h-[40px] bg-input text-white outline-none px-2 flex-1"
      {...props}
    />
  )
}
