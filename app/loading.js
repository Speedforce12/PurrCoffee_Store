import React from "react";

const loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <video loop autoPlay  className="h-full w-full">
        <source src='/coffee_loader.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default loading;
