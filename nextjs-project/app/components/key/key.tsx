"use client";
import React, { useState, useEffect, useCallback } from 'react';


export default function Key({ keyword }: { keyword: string }) {
  const [isPressed, setIsPressed] = useState(false);

  // Handle click event for all keys
  const handleClick = useCallback(() => {
    console.log(`Key ${keyword} clicked`);
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  }, [keyword]);

  // Auto-active effect for Cmd and c
//   useEffect(() => {
//     if (keyword === 'Cmd' || keyword === 'c') {
//       const interval = setInterval(() => {
//         setIsPressed(true);
//         setTimeout(() => {
//           setIsPressed(false);
//         }, 400);
//       }, 3000); // Trigger every 3 seconds

//       return () => clearInterval(interval); // Cleanup on unmount
//     }
//   }, [keyword]);

  // Keyboard listener: trigger handleClick when matching key pressed
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // don't trigger while user is typing in inputs/textarea/contentEditable
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      const isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || target?.isContentEditable;
      if (isTyping) return;

      // Map visual 'Cmd' label to actual key values ('Meta' on macOS/Win key)
      const isCmdMatch = keyword === 'Cmd' && (e.key === 'Meta' || e.key === 'Win');
      const isCharMatch = e.key && e.key.toLowerCase() === keyword.toLowerCase();

      if (isCmdMatch || isCharMatch) {
        e.preventDefault();
        handleClick();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [keyword, handleClick]);

  return (
    <div
      onClick={handleClick}
      className={`w-16 h-16 bg-stone-950 text-white flex items-center justify-center rounded-md shadow-md cursor-pointer select-none border border-neutral-500 transition-all duration-100 ${keyword} ${
        isPressed
          ? 'bg-stone-800 scale-95 shadow-inner shadow-blue-500/50 active'
          : 'shadow-2xl shadow-amber-50/70 hover:shadow-none hover:text-xs'
      }`}
    >
      {keyword}
    </div>
  );
}