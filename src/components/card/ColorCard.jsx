import React, {useState} from 'react';

const ColorCard = ({color, code}) => {
  const [isCopied, setCopied] = useState(false);
  const handleClicked = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div
      style={{backgroundColor: color}}
      className={`group/item h-[30%] hover:h-[75%] transition-all duration-500 ease-in-out relative overflow-hidden bottom-0`}
    >
      <span
        onClick={handleClicked}
        className={`${
          isCopied ? 'bg-black bg-opacity-100' : 'bg-slate-400 bg-opacity-25'
        } invisible group-hover/item:visible  absolute left-0 bottom-0 p-1 text-gray-200 font-bold px-3 rounded-tr-lg cursor-pointer`}
      >
        {isCopied ? 'Copied' : code}
      </span>
    </div>
  );
};

export default ColorCard;
