import React, { useEffect, useRef, useState } from 'react';
import '../../../theme/output.css';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  duration = 500,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) setHasAnimated(true);
          }, delay);
        } else if (!once && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, once, hasAnimated]);

  const animationClasses = {
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'slide-up': isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8',
    'slide-down': isVisible ? 'animate-slide-down' : 'opacity-0 -translate-y-8',
    'slide-left': isVisible ? 'animate-slide-up' : 'opacity-0 translate-x-8',
    'slide-right': isVisible ? 'animate-slide-up' : 'opacity-0 -translate-x-8',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-95',
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffsetY(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  intensity?: number;
  duration?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  direction = 'up',
  intensity = 10,
  duration = 3000,
  className = '',
}) => {
  const directionClasses = {
    up: 'animate-float',
    down: 'animate-float',
    left: 'animate-float',
    right: 'animate-float',
  };

  return (
    <div
      className={`${directionClasses[direction]} ${className}`}
      style={{
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (onComplete) {
        onComplete();
      }
    }, currentIndex === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, delay, onComplete]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default AnimatedSection;
