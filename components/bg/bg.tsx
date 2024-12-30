'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

const Bg = () => {
  // const [positions, setPositions] = useState<Array<{left: string, top: string}>>(Array.from({length: 20}, () => ({
  //   left: `${Math.random() * 100}%`,
  //   top: `${Math.random() * 100}%`
  // })));
  
  // useEffect(() => {
  //   // 컴포넌트가 마운트된 후에만 위치값 생성
  //   const newPositions = Array.from({length: 20}, () => ({
  //     left: `${Math.random() * 100}%`,
  //     top: `${Math.random() * 100}%`
  //   }));
  //   setPositions(newPositions);
  // }, []);

  return (
    <>
          {/* Gradient Background */}
          <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,_#4F46E5,_#E11D48,_#22C55E)] opacity-30" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-red-500 to-green-600 mix-blend-multiply animate-gradient" />
      <div className="fixed inset-0 bg-black/50" /> 
      {/* Floating Elements */}
        {Array.from({length: 20}, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`
  })).map((pos, i) => (
            <motion.div
              key={i}
              className="fixed w-1 h-1 bg-white rounded-full"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
    </>
  )
};

export default Bg;
