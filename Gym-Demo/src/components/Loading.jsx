import React from 'react';
import { FaDumbbell } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <FaDumbbell className="loading-icon" />
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .loading-content {
          text-align: center;
        }
        .loading-icon {
          font-size: 4rem;
          color: #ff4d4d;
          animation: pulse 1.5s infinite;
        }
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 3px solid #1a1a1a;
          border-top-color: #ff4d4d;
          border-radius: 50%;
          margin: 20px auto;
          animation: spin 1s linear infinite;
        }
        .loading-text {
          color: #b0b0b0;
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.1rem;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}