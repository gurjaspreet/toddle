import React from "react";
import resources from "../Utilities/resources.svg";

const EmptyBody = () => {
  return (
    <div className="text-center h-[80vh] flex flex-col justify-center align-middle">
      <div className="flex justify-center p-4">
        <img src={resources} alt="resources" />
      </div>

      <div>
        <p className="text-sm font-bold py-2">Nothing added here yet</p>
        <p className="text-sm">
          Click on the [+] Add button to add items to this course
        </p>
      </div>
    </div>
  );
};

export default EmptyBody;
