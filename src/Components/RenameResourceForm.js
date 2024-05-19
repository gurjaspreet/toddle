import React, { useState, useEffect } from "react";
import closeIcon from "../Utilities/close-icon.svg";

const RenameResourceForm = ({ onClose, onSubmit, initialName }) => {
  const [resourceName, setResourceName] = useState(initialName || "");

  useEffect(() => {
    setResourceName(initialName || "");
  }, [initialName]);

  const handleSubmit = () => {
    if (resourceName.trim() !== "") {
      onSubmit(resourceName);
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
        <h2 className="text-lg font-bold mb-4">Rename Resource</h2>
        <input
          type="text"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="Resource Name"
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

export default RenameResourceForm;
