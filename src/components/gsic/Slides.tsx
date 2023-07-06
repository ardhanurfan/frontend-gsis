import { useEffect, useState } from "react";
import SlideItem from "./SlideItem";
import clsx from "clsx";

type SlidesProp = {
  className?: string;
};

function Slides({ className }: SlidesProp) {
  const [index, setIndex] = useState(-1);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    mediaQuery.addEventListener("change", (e) => setMatches(e.matches));

    return () => {
      mediaQuery.removeEventListener("change", (e) => setMatches(e.matches));
    };
  }, []);

  const styleSlide = {
    container: (isScreenBased: any) => ({
      left: isScreenBased ? `${-33 * index}vw` : `${-100 * index}vw`,
    }),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = matches ? 2 : 3;
      setIndex((oldIndex) => {
        if (oldIndex < idx) {
          return oldIndex + 1;
        } else {
          return matches ? -1 : 0;
        }
      });
    }, 3000);

    if (matches) {
      setIndex(-1);
    } else {
      setIndex(0);
    }

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
        style={styleSlide.container(matches)}
      >
        {/* <SlideItem type="text" active={index === -1} /> */}
        <SlideItem type="tech" active={index === -1} />
        <SlideItem type="buss" active={index === 0} />
        <SlideItem type="art" active={index === 1} />
        <SlideItem type="collab" active={index === 2} />
      </div>
    </div>
  );
}

export default Slides;
