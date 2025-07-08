import React from 'react';
import '../../../theme/output.css';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  const colorClasses = {
    primary: 'text-primary-600',
    secondary: 'text-secondary-600',
    accent: 'text-accent-600',
    white: 'text-white',
    gray: 'text-gray-600',
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}>
      <i className="fa fa-spinner fa-spin text-current"></i>
    </div>
  );
};

interface LoadingDotsProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  className?: string;
}

export const LoadingDots: React.FC<LoadingDotsProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3',
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    accent: 'bg-accent-600',
    white: 'bg-white',
    gray: 'bg-gray-600',
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}></div>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce animate-delay-100`}></div>
      <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce animate-delay-200`}></div>
    </div>
  );
};

interface LoadingPulseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent' | 'white' | 'gray';
  className?: string;
}

export const LoadingPulse: React.FC<LoadingPulseProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  const colorClasses = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    accent: 'bg-accent-600',
    white: 'bg-white',
    gray: 'bg-gray-600',
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse-slow ${className}`}></div>
  );
};

interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
  rounded = true,
}) => {
  return (
    <div 
      className={`bg-gray-200 animate-pulse ${width} ${height} ${rounded ? 'rounded' : ''} ${className}`}
    ></div>
  );
};

interface LoadingCardSkeletonProps {
  className?: string;
}

export const LoadingCardSkeleton: React.FC<LoadingCardSkeletonProps> = ({
  className = '',
}) => {
  return (
    <div className={`card animate-pulse ${className}`}>
      <div className="p-6 space-y-4">
        <LoadingSkeleton height="h-6" width="w-3/4" />
        <LoadingSkeleton height="h-4" width="w-full" />
        <LoadingSkeleton height="h-4" width="w-5/6" />
        <div className="flex space-x-2 mt-4">
          <LoadingSkeleton height="h-6" width="w-16" />
          <LoadingSkeleton height="h-6" width="w-20" />
        </div>
      </div>
    </div>
  );
};

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  spinner?: React.ReactNode;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  spinner,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
          {spinner || <LoadingSpinner size="lg" />}
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
