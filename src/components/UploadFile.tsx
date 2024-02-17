import { UploadIcon } from "@/utils/icons";
import React, { useRef } from "react";

type UploadFileProps = {
  title: string;
  description: string;
};

const UploadFile: React.FC<UploadFileProps> = ({ title, description }) => {
  const intpuRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="border rounded-lg border-gray-300 py-7 cursor-pointer"
      onClick={() => intpuRef.current?.click()}
    >
      <input style={{ display: "none" }} ref={intpuRef} type="file" />

      <div className="flex flex-col items-center m-auto space-y-1">
        <span className="rounded bg-gray-100 rounded-full p-2 w-fit">
          <span className="rounded bg-gray-200 rounded-full flex items-center p-1 ">
            <UploadIcon className="text-[20px]" />
          </span>
        </span>
        <p className="text-primary-500 text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default UploadFile;
