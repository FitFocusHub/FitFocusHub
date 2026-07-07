import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.3)',
              '0 0 40px rgba(59, 130, 246, 0.6)',
              '0 0 20px rgba(59, 130, 246, 0.3)'
            ]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            fontWeight: '900',
            color: '#fff',
            fontFamily: "'Space Grotesk', sans-serif"
          }}
        >
          FFH
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            color: '#6b7280',
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase'
          }}
        >
          FitFocusHub
        </motion.div>
      </motion.div>
    </div>
  );
}
