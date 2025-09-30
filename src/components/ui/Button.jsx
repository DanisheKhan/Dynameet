const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = "relative font-poppins font-medium text-white transition-all duration-300 group"

  const variants = {
    primary: "bg-gradient-to-r from-[#FF33C5] to-[#FD00B6] hover:from-[#FD00B6] hover:to-[#FF33C5]",
    secondary: "bg-gradient-to-r from-[#F764D2] to-[#FF33C5] hover:from-[#FF33C5] hover:to-[#F764D2]",
    ghost: "bg-white/5 hover:bg-white/10 border border-white/20"
  }

  const sizes = {
    small: "w-[87px] h-[33px] rounded-full text-[14px]",
    default: "w-[145px] h-[33px] rounded-full text-[14px]",
    large: "w-[200px] h-[45px] rounded-full text-[16px]"
  }

  return (
    <button
      className={`${baseClasses} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className={`absolute inset-0 rounded-full ${variants[variant]}`}></span>
      <span className="relative z-10 flex items-center justify-center h-full">
        {children}
      </span>
    </button>
  )
}

export default Button
