import React from 'react';

const Banner = ({ imageUrl, altText }) => {
  return (
    <div className="w-full h-96 relative w-full md:h-[621px] overflow-hidden">
        <div>
        <img
        src={imageUrl}
        alt={altText}
        className="object-cover w-full h-[231px] md:h-full"
      />
        </div>
     
    </div>

  );
};

export default Banner;
