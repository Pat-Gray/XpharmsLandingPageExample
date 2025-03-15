import React from 'react';

const BackgroundEffects = () => {
  return (
    <>
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-l from-purple-500/80 to-transparent rounded-full blur-3xl animate-pulse-slow-reverse" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow-2" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      </div>
    </>
  );
};

export default BackgroundEffects; 