import React from "react";
import classNames from "classnames";

const FastMovingCard = ({ item, index, activeItem }) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#2A9D8F]">
    <img
      className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
      src={item.img}
      alt={item.name}
      width="590px"
      height="640px"
    />
    <div
      className={classNames(
        "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
        activeItem === index ? "md:opacity-25" : "md:opacity-0"
      )}
    />
          <div className="hidden md:absolute inset-0 bg-black opacity-35"></div> 

    <div
      className={classNames(
        "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
        activeItem === index
          ? "md:translate-x-0 md:opacity-100"
          : "md:translate-x-4 md:opacity-0"
      )}
    >
      <p className="text-sm uppercase text-white md:text-lg">{item.title}</p>
      <p className="leading-tight text-white text-lg font-bold md:text-4xl ">{item.name}</p>
    </div>
  </div>
  );
};

export default FastMovingCard;
