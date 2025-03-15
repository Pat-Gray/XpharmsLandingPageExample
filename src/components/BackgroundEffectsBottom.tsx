import React, { ReactNode } from 'react';

interface BackgroundEffectsBottomProps {
  children: ReactNode;
}

const BackgroundEffectsBottom = ({ children }: BackgroundEffectsBottomProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large center-right orb - Adjust opacity by changing /20 to higher number for more visibility */}
        <div className="absolute top-1/4 right-[15%] w-[45%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/20 via-secondary/15 to-transparent rounded-full blur-3xl animate-float-slow" />
        </div>

        {/* Bottom-left orb - Adjust opacity and colors in from-{color} and via-{color} */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/25 via-secondary/20 to-transparent rounded-full blur-3xl animate-float-slow-reverse" />
        </div>

        {/* Top-right accent - Increase /10 and /15 for more visibility */}
        <div className="absolute top-0 right-[20%] w-[30%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-purple-500/35 to-transparent rounded-full blur-3xl animate-float-slow-2" />
        </div>

        {/* Middle-left accent - Adjust /30 for stronger effect */}
        <div className="absolute top-1/2 left-[10%] w-[25%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-transparent rounded-full blur-3xl animate-float-slow-3" />
        </div>

        {/* Additional center glow - Remove or adjust opacity as needed */}
        <div className="absolute top-1/3 left-1/3 w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/15 via-secondary/10 to-transparent rounded-full blur-3xl animate-float-slow-4" />
        </div>

       

        {/* Gradient overlay - Adjust opacity by changing numbers after white/ */}
        {/* For more contrast with content, increase the via-white/95 value */}
        {/* For more visible background effects, decrease these values */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/80 to-white/5" />
      </div>

      {/* Render children components */}
      {children}
    </div>
  );
};

export default BackgroundEffectsBottom;

/* 
Quick Customization Guide:

1. To make all effects brighter:
   - Increase opacity values (the numbers after /) in the color classes
   - Example: from-purple-500/20 -> from-purple-500/40

2. To make effects larger:
   - Increase the w-[45%] values to higher percentages
   - Adjust positioning with top, right, bottom, left values

3. To change colors:
   - Replace color names (purple-500, blue-500, secondary)
   - Available colors: blue, purple, green, red, yellow, etc.
   - Use consistent colors with your brand

4. To adjust animation speed:
   - Modify the animation durations in tailwind.config.js
   - Current animations: float-slow, float-slow-reverse, etc.

5. To adjust blur intensity:
   - Change blur-3xl to blur-2xl (less) or blur-[4rem] (more)

6. To modify grid pattern:
   - Adjust the opacity in rgba(59,130,246,0.05)
   - Change grid size in bg-[size:40px_40px]
*/ 