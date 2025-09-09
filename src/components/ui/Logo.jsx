const Logo = ({ size = 'default', className = '' }) => {
  const sizes = {
    small: 'w-[40px] h-[40px] text-[16px]',
    default: 'w-[57px] h-[57px] text-[20px]',
    large: 'w-[80px] h-[80px] text-[28px]'
  }

  return (
    <div className={`rounded-full bg-gradient-to-r from-[#FF33C5] to-[#FD00B6] flex items-center justify-center ${sizes[size]} ${className}`}>
      <span className="font-lalezar font-bold text-white">DJ</span>
    </div>
  )
}

export default Logo
