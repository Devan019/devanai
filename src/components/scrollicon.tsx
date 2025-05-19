import { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

interface MouseScrollIndicatorProps {
  scrollY?: number;
  threshold?: number;
}

const MouseScrollIndicator = ({ scrollY = 0, threshold = 100 }: MouseScrollIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();
  const wheelControls = useAnimation();

  useEffect(() => {

    const shouldShow = scrollY < threshold;
    setIsVisible(shouldShow);

    if (shouldShow) {
      controls.start({ 
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
      
      // Wheel scroll animation
      wheelControls.start({
        y: [0, 6, 0],
        opacity: [1, 0.8, 1],
        transition: { 
          repeat: Infinity, 
          duration: 1.8,
          ease: "easeInOut"
        }
      });
    } else {
      controls.start({ 
        opacity: 0,
        y: 20,
        transition: { duration: 0.5 }
      });
      wheelControls.stop();
    }
  }, [scrollY, threshold, controls, wheelControls]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          exit={{ opacity: 0, y: 20 }}
          className="fixed left-12 bottom-8 z-50"
        >
          <div className="relative">
            {/* Modern mouse outline */}
            <svg
              width="40"
              height="60"
              viewBox="0 0 40 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/90 hover:text-white transition-colors"
            >
              {/* Mouse body with rounded corners */}
              <path
                d="M20 2C28.8366 2 36 9.16344 36 18V42C36 50.8366 28.8366 58 20 58C11.1634 58 4 50.8366 4 42V18C4 9.16344 11.1634 2 20 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Mouse buttons divider */}
              <path
                d="M10 18H30"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              
              {/* Mouse wheel area (empty space) */}
              {/* <rect x="15" y="20" width="10" height="16" rx="2" fill="transparent" stroke="currentColor" strokeWidth="1" /> */}
            </svg>
            
            {/* Animated wheel element */}
            <motion.div
              animate={wheelControls}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ width: '10px', height: '16px' }}
            >
              <div className="h-4 w-2 bg-white/80 rounded-full mx-auto"></div>
            </motion.div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full blur-md opacity-20 pointer-events-none" 
              style={{ 
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
                width: '60px',
                height: '60px',
                left: '-10px',
                top: '-10px'
              }}
            />
          </div>
          
          {/* Optional subtle down arrow */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              y: [0, 4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-1/2 -bottom-6 transform -translate-x-1/2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MouseScrollIndicator;