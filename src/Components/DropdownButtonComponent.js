import React, { useState, useRef, useEffect } from "react";
import plus from "../Utilities/plus.svg";
import linkImg from "../Utilities/link-img.jpg";
import moduleImg from "../Utilities/module-img.jpg";
import uploadImg from "../Utilities/upload-img.jpg";
import upArrow from "../Utilities/up-arrow.svg";
import downArrow from "../Utilities/down-arrow.svg";

const DropdownButtonComponent = ({
  onCreateModule,
  onUploadResource,
  onAddLink,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-sm font-medium text-white hover:bg-red-700 focus:outline-none"
      >
        <div className="flex justify-between w-16">
          <img src={plus} alt="plus" className="w-4 h-4 mt-0.5 px-1" />
          <p>Add</p>
          <img
            src={showDropdown ? upArrow : downArrow}
            alt="arrow"
            className="w-4 h-4 mt-0.5 px-1"
          />
        </div>
      </button>
      {showDropdown && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="flex justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <img
                src={moduleImg}
                alt="moduleImg"
                className="w-4 h-4 mt-2.5 ml-2"
              />
              <button
                onClick={onCreateModule}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Create a module
              </button>
            </div>
            <div className="flex justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <img
                src={linkImg}
                alt="linkImg"
                className="w-4 h-4 mt-2.5 ml-2"
              />
              <button
                onClick={onAddLink}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Add a link
              </button>
            </div>
            <div className="flex justify-start text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
              <img
                src={uploadImg}
                alt="uploadImg"
                className="w-4 h-4 mt-2.5 ml-2"
              />
              <button
                onClick={onUploadResource}
                className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButtonComponent;
