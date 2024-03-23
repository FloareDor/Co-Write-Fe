import { list } from 'postcss';
import React, { useState } from 'react';

interface props{
	text?: string;
	options?: string[];
}

const Dropdown = ({text="Style", options=['Option 1', 'Option 2', 'Option 3']} :props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 bg-peach-500 text-black text-xl font-semibold lg:text-2xl px-4 py-2 rounded-md"
        onClick={toggleDropdown}
      >
        {text}
        <svg
          className={`w-8 h-8 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white rounded-md shadow-lg">
          {options.map((option, index) => (
            <div key={index} className="py-2 px-4 hover:bg-gray-100 text-black cursor-pointer">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
