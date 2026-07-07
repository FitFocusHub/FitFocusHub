import React, { useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';
import './StatsCounter.css';

export default function StatsCounter({ end, label, suffix = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const { count, start } = useAnimatedCounter(end, 2000);

  useEffect(() => {
    if (isInView) {
      start();
    }
  }, [isInView, start]);

  return (
    <div ref={ref} className="stat-item">
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
