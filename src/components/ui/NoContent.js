import React, { ReactNode } from "react";
import Button from "./Button";
import { Plus } from "lucide-react";

const NoContent = ({ icon, onClick, type }) => {
  return (
    <div className="border-dashed border-2 text-center p-8 rounded-lg">
      <div className="border-dashed border-2 text-black/80 w-[10rem] h-[10rem] p-8 mb-8 rounded-full flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h2 className="text-3xl font-bold mb-2">No {type} created</h2>
      <p>You don&apos;t have any {type} yet. Start creating content.</p>
      {onClick && (
        <Button
          text={`New ${type.slice(0, -1)}`}
          icon={<Plus className="h-4 w-4 mr-2" />}
          onClick={onClick}
          className="flex mx-auto mt-4"
        />
      )}
    </div>
  );
};

export default NoContent;
