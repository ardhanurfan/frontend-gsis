import { ChangeEvent, useState } from 'react';

const AnimatedElement = () => {
  const [width, setWidth] = useState(100);

  const handleWidthChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(event.target.value));
  };

  return (
    <div>
      <input type="number" value={width} onChange={handleWidthChange} />
      <DivElement length={width}/>
    </div>
  );
};

type DivElementProps = {
    length: number
}

const DivElement = ({length}: DivElementProps) => {
    return <div
        className="absolute h-80 w-80 ease-out duration-300 bg-slate-300"
        style={{ 
            top: `${length}px`,
        }}
    ></div>
}

export default AnimatedElement;
