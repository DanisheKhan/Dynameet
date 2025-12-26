/**
 * PageLayout - Consistent layout wrapper for all pages
 * Provides standardized spacing, container width, and structure
 */
export default function PageLayout({ children, className = '' }) {
  return (
    <div className={`min-h-[calc(100vh-90px)] w-full ${className}`}>
      {children}
    </div>
  )
}
