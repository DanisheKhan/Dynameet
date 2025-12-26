/**
 * PageHeader - Consistent header component for all pages
 * Provides standardized title, divider, and description styling
 */
export default function PageHeader({ title, description, className = '' }) {
  return (
    <div className={`text-center mb-12 px-4 ${className}`}>
      <h1 className="font-lalezar text-5xl md:text-6xl lg:text-[80px] text-white mb-4">
        {title}
      </h1>
      <div className="h-[2px] w-24 bg-gradient-to-r from-[#FF33C5] to-[#BF5AF2] mx-auto mb-6"></div>
      {description && (
        <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
