const Logo = ({ size = 'default', className = '' }) => {
  const sizes = {
    small: 'w-[30px] h-[30px]',
    default: 'w-[200px] h-[60px]',
    large: 'w-[80px] h-[80px]'
  }

  return (
    <div className={`flex items-center justify-center ${sizes[size]} ${className}`}>
      <img
        src="/images/logo.png"
        alt="DynaMeets Logo"
        className="w-full h-full object-contain"
      />
    </div>
  )
}

export default Logo
