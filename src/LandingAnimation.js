import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LandingAnimation = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    const letters = ['0', 'x', 'P', 'a', 's', 's'];

    if (animationRef.current) {
      letters.forEach((letter, index) => {
        const div = document.createElement('div');
        div.textContent = letter;
        div.style.fontSize = '120px'; // Set font size
        div.style.fontWeight = 'bold'; // Set font weight
        div.style.color = 'black'; // Customize color if needed
        animationRef.current.appendChild(div);

        gsap.set(div, { x: 0, opacity: 0 }); // Set initial position to the left

        timeline.to(div, { duration: 0.5, x: 0, opacity: 1 }, index * 0.2); // Animate from left to right
      });

      timeline.play();
    }

    return () => {
      timeline.kill(); // Cleanup animation when component unmounts
    };
  }, []);

  return (
      <div ref={animationRef} style={{ display: 'flex' }} />
  );
};

export default LandingAnimation;
