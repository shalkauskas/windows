import React from 'react';
export default function useOuterClick(callback) {
  const callbackRef = React.useRef(); // initialize mutable callback ref
  const innerRef = React.useRef(); // returned to client, who sets the "border" element

  // update callback on each render, so second useEffect has most recent callback
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target)
      )
        callbackRef.current(e);
    }
  }, []); // no dependencies -> stable click listener

  return innerRef; // convenience for client (doesn't need to init ref himself)
}
