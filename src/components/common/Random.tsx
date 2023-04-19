import React, {useState} from 'react'

const Random = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isExpanding, setIsExpanding] = useState(false);
    const [sizeClass, setSizeClass] = useState("w-1 h-1");
  
    const handleClick = () => {
      if (!isExpanding) {
        setIsExpanding(true);
        setIsExpanded(!isExpanded);
        setSizeClass(isExpanded ? "w-1 h-1" : "w-full h-full");
      } else {
        setIsExpanded(!isExpanded);
        setSizeClass(isExpanded ? "w-full h-full" : "w-1 h-1");
      }
    };
  
    const handleAnimationEnd = () => {
      setIsExpanding(false);
      if (!isExpanded) {
        setSizeClass("w-1 h-1");
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          {isExpanded ? "Shrink" : "Expand"}
        </button>
        <div
          className={`bg-black rounded-full ${sizeClass} ${
            isExpanded ? "animate-expand-square" : "animate-contract-square"
          } ${isExpanding ? "animate-paused" : ""}`}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      </div>
    );
  };

export default Random