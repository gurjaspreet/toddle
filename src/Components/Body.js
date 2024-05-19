import React, { useState } from "react";
import pdfIcon from "../Utilities/pdf-icon.svg";
import imageIcon from "../Utilities/image-icon.svg";
import linkIcon from "../Utilities/link-icon.svg";
import optionsIcon from "../Utilities/options-icon.svg";
import moduleIcon from "../Utilities/module-icon.svg";
import editIcon from "../Utilities/edit-icon.svg";
import deleteIcon from "../Utilities/delete-icon.svg";
import EmptyBody from "./EmptyBody";

const Body = ({
  modules,
  resources,
  links,
  onEditModule,
  onDeleteModule,
  onRenameResource,
  onDeleteResource,
  onEditLink,
  onDeleteLink,
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  const [activeDropdown1, setActiveDropdown1] = useState(null);

  const toggleDropdown1 = (id) => {
    setActiveDropdown1((prev) => (prev === id ? null : id));
  };

  const [activeDropdown2, setActiveDropdown2] = useState(null);

  const toggleDropdown2 = (id) => {
    setActiveDropdown2((prev) => (prev === id ? null : id));
  };

  return (
    <div className="container mx-auto p-4">
      {modules.length === 0 && resources.length === 0 && links.length === 0 && (
        <EmptyBody />
      )}
      {modules.map((module) => (
        <div
          key={module.id}
          className="mx-64 my-8 border-b-2 pb-4 mb-4 flex justify-between items-center"
        >
          <div className="flex justify-start">
            <img src={moduleIcon} alt="Module" className="w-8 h-8 mb-2 mr-2" />
            <span>{module.name}</span>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown(module.id)}
              className="px-2 py-1"
            >
              <img src={optionsIcon} alt="Options" className="w-6 h-6" />
            </button>
            {activeDropdown === module.id && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-[500]">
                <button
                  onClick={() => {
                    toggleDropdown(null);
                    onEditModule(module);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="w-4 h-4 mr-2"
                  />
                  Edit
                </button>
                <button
                  onClick={() => {
                    toggleDropdown(null);
                    onDeleteModule(module.id);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="w-4 h-4 mr-2"
                  />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {resources.map((resource) => (
        <div
          key={resource.id}
          className="mx-64 my-8 border-b-2 pb-4 mb-4 flex justify-between items-center"
        >
          <div className="flex justify-start">
            {resource.fileType === "pdf" && (
              <img src={pdfIcon} alt="PDF" className="w-8 h-8 mb-2 mr-2" />
            )}
            {resource.fileType === "image" && (
              <img src={imageIcon} alt="" className="w-8 h-8 mb-2 mr-2" />
            )}
            <span>{resource.name}</span>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown1(resource.id)}
              className="px-2 py-1"
            >
              <img src={optionsIcon} alt="Options" className="w-6 h-6" />
            </button>
            {activeDropdown1 === resource.id && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                <button
                  onClick={() => {
                    toggleDropdown1(null);
                    onRenameResource(resource);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="w-4 h-4 mr-2"
                  />
                  Edit
                </button>
                <button
                  onClick={() => {
                    toggleDropdown1(null);
                    onDeleteResource(resource.id);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="w-4 h-4 mr-2"
                  />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
      {/* <h2 className="text-lg font-bold mt-8 mb-4">Links</h2> */}
      {links.map((link) => (
        <div
          key={link.id}
          className="mx-64 my-8 border-b-2 pb-4 mb-4 flex justify-between items-center"
        >
          <div className="flex justify-start">
            <img src={linkIcon} alt="Link" className="w-8 h-8 mb-2 mr-2" />
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {link.name}
            </a>
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown2(link.id)}
              className="px-2 py-1"
            >
              <img src={optionsIcon} alt="Options" className="w-6 h-6" />
            </button>
            {activeDropdown2 === link.id && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
                <button
                  onClick={() => {
                    toggleDropdown2(null);
                    onEditLink(link);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="w-4 h-4 mr-2"
                  />
                  Edit
                </button>
                <button
                  onClick={() => {
                    toggleDropdown2(null);
                    onDeleteLink(link.id);
                  }}
                  className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="w-4 h-4 mr-2"
                  />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;