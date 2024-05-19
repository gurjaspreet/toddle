import React, { useState } from "react";
import closeIcon from "../Utilities/close-icon.svg";
import pdfIcon from "../Utilities/pdf-icon.svg";
import imageIcon from "../Utilities/image-icon.svg";

const ResourceForm = ({ onClose, onSubmit }) => {
  const [resourceName, setResourceName] = useState("");
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    const fileType = getFileType(selectedFile);
    if (fileType) {
      setFileType(fileType);
      setFile(selectedFile);
    } else {
      // Invalid file type
      alert("Only PDF, JPG, JPEG, and PNG files are allowed.");
    }
  };

  const getFileType = (file) => {
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];
    if (allowedTypes.includes(file.type)) {
      if (file.type === "application/pdf") {
        return "pdf";
      } else {
        return "image";
      }
    }
    return null;
  };

  const handleSubmit = () => {
    if (file && resourceName.trim() !== "") {
      onSubmit({ name: resourceName, fileType, file });
      setResourceName("");
      setFile(null);
      setFileType(null);
    } else {
      // File or resource name is missing
      alert("Please provide a resource name and select a file.");
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
        <h2 className="text-lg font-bold mb-4">Upload a Resource</h2>
        <input
          type="text"
          value={resourceName}
          onChange={(e) => setResourceName(e.target.value)}
          className="w-full px-3 py-2 mb-4 border rounded"
          placeholder="Resource Name"
        />
        <input
          type="file"
          accept=".pdf, .jpg, .jpeg, .png"
          onChange={handleFileChange}
          className="w-full px-3 py-2 mb-4 border rounded"
        />
        {/* Render file icon based on file type */}
        {fileType === "pdf" && (
          <img src={pdfIcon} alt="PDF" className="w-8 h-8 mb-2 mr-2" />
        )}
        {fileType === "image" && (
          <img src={imageIcon} alt="Image" className="w-8 h-8 mb-2 mr-2" />
        )}
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
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
