/**
 * ContentSection - Consistent content wrapper for page sections
 * Provides standardized container width and padding
 */
export default function ContentSection({ children, className = '', maxWidth = 'max-w-7xl' }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        {children}
      </div>
    </section>
  )
}
