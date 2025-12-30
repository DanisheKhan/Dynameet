import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage component with lazy loading, blur placeholder, and error handling
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Blur placeholder while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF33C5]/10 to-[#BF5AF2]/10 animate-pulse" />
      )}
      
      {/* Error state */}
      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white/5">
          <span className="text-white/50 text-sm">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          {...props}
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  fetchPriority: PropTypes.oneOf(['high', 'low', 'auto']),
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default OptimizedImage;
