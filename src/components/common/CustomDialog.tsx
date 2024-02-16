/* eslint-disable react/display-name */
import clsx from "clsx";
import React, { Ref, forwardRef, useImperativeHandle, useState } from "react";

type CustomDialogProps = {
  children?: React.ReactNode;
};

export type RefObject = {
  showDialog(): void;
};

const CustomDialog = forwardRef<RefObject, CustomDialogProps>(
  ({ children }, ref: Ref<RefObject>) => {
    const [open, setOpen] = useState(false);
    useImperativeHandle(ref, () => ({
      showDialog() {
        setOpen((prev) => !prev);
      },
    }));

    return (
      <div
        className={clsx("z-[1000] absolute", {
          ["hidden"]: !open,
        })}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

export default CustomDialog;
