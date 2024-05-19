import React, { useState } from "react";
import DropdownButtonComponent from "./Components/DropdownButtonComponent";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import ModuleForm from "./Components/ModuleForm";
import ResourceForm from "./Components/ResourceForm";
import RenameResourceForm from "./Components/RenameResourceForm";
import LinkForm from "./Components/LinkForm";
import "./index.css";

function App() {
  const [modules, setModules] = useState([]);
  const [resources, setResources] = useState([]);
  const [links, setLinks] = useState([]);
  const [showModuleForm, setShowModuleForm] = useState(false);
  const [showResourceForm, setShowResourceForm] = useState(false);
  const [showRenameResourceForm, setShowRenameResourceForm] = useState(false);
  const [showLinkForm, setShowLinkForm] = useState(false);
  const [editingModule, setEditingModule] = useState(null);
  const [editingResource, setEditingResource] = useState(null);
  const [editingLink, setEditingLink] = useState(null);

  const handleCreateModule = (moduleName) => {
    setModules([...modules, { id: modules.length + 1, name: moduleName }]);
    setShowModuleForm(false);
  };

  const handleEditModule = (moduleId, newName) => {
    setModules(
      modules.map((module) =>
        module.id === moduleId ? { ...module, name: newName } : module
      )
    );
    setEditingModule(null);
    setShowModuleForm(false);
  };

  const handleOpenEditModuleForm = (module) => {
    console.log("Opening edit module form for:", module);
    setEditingModule(module);
    setShowModuleForm(true);
  };

  const handleDeleteModule = (moduleId) => {
    setModules(modules.filter((module) => module.id !== moduleId));
  };

  const handleUploadResource = (resource) => {
    setResources([...resources, { id: resources.length + 1, ...resource }]);
    setShowResourceForm(false);
  };

  const handleRenameResource = (resourceId, newName) => {
    setResources(
      resources.map((resource) =>
        resource.id === resourceId ? { ...resource, name: newName } : resource
      )
    );
    setEditingResource(null);
    setShowRenameResourceForm(false);
  };

  const handleOpenRenameResourceForm = (resource) => {
    console.log("Opening rename resource form for:", resource);
    setEditingResource(resource);
    setShowRenameResourceForm(true);
  };

  const handleDeleteResource = (resourceId) => {
    setResources(resources.filter((resource) => resource.id !== resourceId));
  };

  const handleCreateLink = (link) => {
    setLinks([...links, { id: links.length + 1, ...link }]);
    setShowLinkForm(false);
  };

  const handleEditLink = (linkId, updatedLink) => {
    setLinks(
      links.map((link) =>
        link.id === linkId ? { ...link, ...updatedLink } : link
      )
    );
    setEditingLink(null);
    setShowLinkForm(false);
  };

  const handleOpenEditLinkForm = (link) => {
    console.log("Opening edit link form for:", link);
    setEditingLink(link);
    setShowLinkForm(true);
  };

  const handleDeleteLink = (linkId) => {
    setLinks(links.filter((link) => link.id !== linkId));
  };

  return (
    <div className="App">
      <div className="flex justify-between mx-64 mt-[32px]">
        <Navbar />
        <DropdownButtonComponent
          onCreateModule={() => setShowModuleForm(true)}
          onUploadResource={() => setShowResourceForm(true)}
          onAddLink={() => setShowLinkForm(true)}
        />
      </div>
      <Body
        modules={modules}
        resources={resources}
        links={links}
        onEditModule={handleOpenEditModuleForm}
        onDeleteModule={handleDeleteModule}
        onRenameResource={handleOpenRenameResourceForm}
        onDeleteResource={handleDeleteResource}
        onEditLink={handleOpenEditLinkForm}
        onDeleteLink={handleDeleteLink}
      />
      {showModuleForm && (
        <ModuleForm
          onClose={() => setShowModuleForm(false)}
          onSubmit={
            editingModule
              ? (name) => handleEditModule(editingModule.id, name)
              : handleCreateModule
          }
          initialName={editingModule ? editingModule.name : ""}
        />
      )}
      {showResourceForm && (
        <ResourceForm
          onClose={() => setShowResourceForm(false)}
          onSubmit={handleUploadResource}
        />
      )}
      {showRenameResourceForm && (
        <RenameResourceForm
          onClose={() => setShowRenameResourceForm(false)}
          onSubmit={
            editingResource
              ? (name) => handleRenameResource(editingResource.id, name)
              : handleRenameResource
          }
          initialName={editingResource ? editingResource.name : ""}
        />
      )}
      {showLinkForm && (
        <LinkForm
          onClose={() => setShowLinkForm(false)}
          onSubmit={
            editingLink
              ? (updatedLink) => handleEditLink(editingLink.id, updatedLink)
              : handleCreateLink
          }
          initialUrl={editingLink ? editingLink.url : ""}
          initialName={editingLink ? editingLink.name : ""}
        />
      )}
    </div>
  );
}

export default App;
