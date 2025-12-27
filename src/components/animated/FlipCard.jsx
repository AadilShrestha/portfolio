import { motion } from 'framer-motion';
import { useState } from 'react';

const FlipCard = ({ 
  frontContent,
  backContent,
  className = ''
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onClick={handleFlip}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>
        
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
