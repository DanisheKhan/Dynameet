const Logo = ({ size = 'default', className = '' }) => {
  const sizes = {
    small: 'w-[40px] h-[40px]',
    default: 'w-[57px] h-[57px]',
    large: 'w-[80px] h-[80px]'
  }

  return (
    <div className={`flex items-center justify-center ${sizes[size]} ${className}`}>
      <img
        src="/images/logo.svg"
        alt="Dynameet Logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Logo
