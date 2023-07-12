import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <Loader className="mr-2 h-[5rem] w-[5rem] animate-spin" />
    </div>
  );
};

export default Loading;
