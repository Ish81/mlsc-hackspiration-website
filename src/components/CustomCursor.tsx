import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateCursor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Smooth cursor following
  useEffect(() => {
    let animationFrame: number;
    
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.15,
        y: prev.y + (targetPosition.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [targetPosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer rotating hexagon */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <svg 
          width={isPointer ? "56" : "44"} 
          height={isPointer ? "56" : "44"} 
          viewBox="0 0 56 56"
          className="transition-all duration-300"
          style={{
            animation: 'spin 8s linear infinite',
            filter: `drop-shadow(0 0 ${isClicking ? '15px' : '8px'} hsl(var(--primary)))`,
          }}
        >
          {/* Outer hexagon */}
          <polygon 
            points="28,2 50,15 50,41 28,54 6,41 6,15" 
            fill="none" 
            stroke="hsl(var(--primary))"
            strokeWidth={isPointer ? "1.5" : "1"}
            opacity={isPointer ? "1" : "0.6"}
            className="transition-all duration-300"
          />
          
          {/* Inner rotating triangle */}
          <g style={{ 
            transformOrigin: '28px 28px',
            animation: 'spin 4s linear infinite reverse',
          }}>
            <polygon 
              points="28,12 40,36 16,36" 
              fill="none" 
              stroke="hsl(var(--secondary))"
              strokeWidth="1"
              opacity="0.8"
            />
          </g>
        </svg>

        {/* Center core */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: isClicking ? '10px' : isPointer ? '8px' : '5px',
            height: isClicking ? '10px' : isPointer ? '8px' : '5px',
            background: `radial-gradient(circle, hsl(var(--primary)), hsl(var(--secondary)))`,
            boxShadow: `
              0 0 ${isClicking ? '20px' : '10px'} hsl(var(--primary)),
              0 0 ${isClicking ? '40px' : '20px'} hsl(var(--primary) / 0.5),
              inset 0 0 5px rgba(255,255,255,0.5)
            `,
            transition: 'all 0.15s ease',
          }}
        />

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2"
            style={{
              width: '4px',
              height: '4px',
              marginLeft: '-2px',
              marginTop: '-2px',
              animation: `orbit ${2 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <div 
              className="w-full h-full rounded-full bg-primary"
              style={{
                boxShadow: '0 0 6px hsl(var(--primary))',
                opacity: isPointer ? 1 : 0.6,
              }}
            />
          </div>
        ))}

        {/* Click ripple effect */}
        {isClicking && (
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary"
            style={{
              width: '60px',
              height: '60px',
              animation: 'ripple 0.6s ease-out forwards',
            }}
          />
        )}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit {
          from { 
            transform: rotate(0deg) translateX(18px) rotate(0deg); 
          }
          to { 
            transform: rotate(360deg) translateX(18px) rotate(-360deg); 
          }
        }
        @keyframes ripple {
          0% { 
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 1;
          }
          100% { 
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
