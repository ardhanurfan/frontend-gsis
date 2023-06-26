import { useEffect, useState } from "react";
import SlideItem from "./SlideItem";
import clsx from "clsx";

type SlidesProp = {
  className?: string;
};

function Slides({ className }: SlidesProp) {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((oldIndex) => {
        if (oldIndex < 3) {
          return oldIndex + 1;
        } else {
          return -1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={clsx(
        "relative w-full h-96 my-10 flex items-center overflow-hidden",
        className
      )}
    >
      <div
        className="absolute flex items-center duration-1000 slides"
        style={{ left: `${-100 * index}vw` }}
      >
        <SlideItem type="text" active={index === -1} />
        <SlideItem type="tech" active={index === 0} />
        <SlideItem type="buss" active={index === 1} />
        <SlideItem type="art" active={index === 2} />
        <SlideItem type="collab" active={index === 3} />
      </div>
    </div>
  );
}

export default Slides;
