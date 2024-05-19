// src/Components/LinkForm.js
import React, { useState, useEffect } from "react";
import closeIcon from "../Utilities/close-icon.svg";

const LinkForm = ({ onClose, onSubmit, initialUrl = "", initialName = "" }) => {
  const [url, setUrl] = useState(initialUrl);
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setUrl(initialUrl);
    setName(initialName);
  }, [initialUrl, initialName]);

  const handleSubmit = () => {
    if (url.trim() && name.trim()) {
      onSubmit({ url, name });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg relative w-80">
        <img
          src={closeIcon}
          alt="close"
          className="w-4 h-4 absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="text-lg font-bold mb-4">
          {initialUrl ? "Edit Link" : "Add a Link"}
        </h2>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="URL"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="Link Name"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
