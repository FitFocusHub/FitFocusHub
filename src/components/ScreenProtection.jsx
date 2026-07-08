import { useEffect } from 'react';

export default function ScreenProtection() {
  useEffect(() => {
    // Block PrintScreen and clear clipboard
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('').catch(() => {});
        alert('Screenshots are not allowed on this website.');
      }
    };

    // Block keyboard shortcuts
    const handleKeyDown = (e) => {
      // Block PrintScreen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        navigator.clipboard.writeText('').catch(() => {});
        alert('Screenshots are not allowed on this website.');
        return false;
      }

      // Block Ctrl+PrintScreen
      if (e.ctrlKey && e.key === 'PrintScreen') {
        e.preventDefault();
        navigator.clipboard.writeText('').catch(() => {});
        alert('Screenshots are not allowed on this website.');
        return false;
      }

      // Block Ctrl+P (Print)
      if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        alert('Printing is not allowed on this website.');
        return false;
      }

      // Block Ctrl+Shift+S (Save screenshot / Snipping Tool)
      if (e.ctrlKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        alert('Screenshots are not allowed on this website.');
        return false;
      }

      // Block Windows+Shift+S (Snipping Tool)
      if (e.metaKey && e.shiftKey && e.key === 'S') {
        e.preventDefault();
        alert('Screenshots are not allowed on this website.');
        return false;
      }

      // Block Alt+PrintScreen
      if (e.altKey && e.key === 'PrintScreen') {
        e.preventDefault();
        navigator.clipboard.writeText('').catch(() => {});
        alert('Screenshots are not allowed on this website.');
        return false;
      }

      // Block Ctrl+U (View Source)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }

      // Block F12 (Dev Tools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+I (Dev Tools)
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+C (Inspect)
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }

      // Block Windows key (Meta key) combos
      if (e.metaKey && e.key !== 'Meta') {
        // Allow some meta keys but block others
        if (e.key === 'Shift' || e.key === 's' || e.key === 'S') {
          // Already handled above
        }
      }
    };

    // Block right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Block drag
    const handleDrag = (e) => {
      e.preventDefault();
      return false;
    };

    // Block clipboard copy
    const handleCopy = (e) => {
      e.preventDefault();
      return false;
    };

    // Block clipboard cut
    const handleCut = (e) => {
      e.preventDefault();
      return false;
    };

    // Clear clipboard on visibility change (screen recording detection)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        navigator.clipboard.writeText('').catch(() => {});
      }
    };

    // Clear clipboard periodically
    const clearClipboardInterval = setInterval(() => {
      navigator.clipboard.writeText('').catch(() => {});
    }, 5000);

    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDrag);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Add CSS to prevent selection
    const style = document.createElement('style');
    style.id = 'screen-protection';
    style.textContent = `
      * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
      }
      img, video, canvas {
        -webkit-user-drag: none;
        user-drag: none;
        pointer-events: none;
      }
      @media print {
        body { display: none !important; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDrag);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(clearClipboardInterval);
      const existingStyle = document.getElementById('screen-protection');
      if (existingStyle) existingStyle.remove();
    };
  }, []);

  return null;
}
