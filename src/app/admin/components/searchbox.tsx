import React, { useState, useEffect, useRef } from 'react';

const SearchBox: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.code === 'Slash') {
        evt.preventDefault();
        searchBoxRef.current?.focus();
        setDropdownOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setDropdownOpen(true);
  };

  return (
    <div className="max-w-sm ">
      <div className="relative border-t-[1px] border-b-[1px] border-r-[1px] border-l-[1px] dark:border-[#404040] border-[#E5E7EB]  ">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
          <svg
            className="shrink-0 size-4 text-black dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          ref={searchBoxRef}
          className="py-3 ps-10 pe-4 block w-full
          bg-[#F5F5F5]
          dark:bg-[#404040]
          text-sm text-black
           dark:text-white
            focus:border-blue-500 focus:ring-blue-500 
            disabled:opacity-50 disabled:pointer-events-none 
           
            border-1 dark:focus:ring-blue-600"
          type="text"
          role="combobox"
          aria-expanded={isDropdownOpen}
          placeholder="Pesquise"
          value={searchQuery}
          onChange={handleSearchChange}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        />
        {isDropdownOpen && (
          <div className="absolute z-50 w-full bg-[#ece9e9] dark:bg-[#424242] rounded-lg shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]">
            <div className="max-h-[500px] p-2 overflow-y-auto overflow-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-gray-100 scrollbar-thumb-gray-300 dark:scrollbar-track-neutral-700 dark:scrollbar-thumb-neutral-500">
            
            
            
            
            
            
              {/* Dropdown items */}
              <div className="py-2 px-3 flex items-center gap-x-3 hover:bg-[#4d555c83]  rounded-lg dark:hover:bg-neutral-700">
                <svg
                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-gray-800 dark:text-gray-400">Compose an email</span>
                <span className="ms-auto text-xs text-gray-400 dark:text-neutral-500">Gmail</span>
              </div>
              {/* Add more dropdown items as needed */}
              <div className="py-2 px-3 flex items-center gap-x-3 hover:bg-[#4d555c83]  rounded-lg dark:hover:bg-neutral-700">
                <svg
                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-gray-800 dark:text-gray-400">Compose an email</span>
                <span className="ms-auto text-xs text-gray-400 dark:text-neutral-500">Gmail</span>
              </div>
              <div className="py-2 px-3 flex items-center gap-x-3 hover:bg-[#4d555c83]  rounded-lg dark:hover:bg-neutral-700">
                <svg
                  className="shrink-0 size-4 text-gray-600 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-sm text-gray-800 dark:text-gray-400">Compose an email</span>
                <span className="ms-auto text-xs text-gray-400 dark:text-neutral-500">Gmail</span>
              </div>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

export default SearchBox;
