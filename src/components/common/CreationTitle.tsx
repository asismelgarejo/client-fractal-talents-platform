import React from "react";
import { DeleteIcon } from "@/utils/icons";

type Actions = "edit" | "create";

type CreationTitleProps = {
  editing?: boolean;
  headerTexts?: Partial<Record<Actions, string>>;
  subheaderTexts?: Partial<Record<Actions, string>>;
};

const CreationTitle: React.FC<CreationTitleProps> = ({
  editing = false,
  headerTexts,
  subheaderTexts,
}) => {
  return (
    <>
      <div className="text-start relative">
        <h2 className="text-lg text-black font-bold">
          {!editing ? headerTexts?.create : headerTexts?.edit}
        </h2>
        {subheaderTexts && (
          <p className="text-gray-500 text-sm font-light">
            {!editing ? subheaderTexts?.create : subheaderTexts?.create}
          </p>
        )}
      </div>
    </>
  );
};

export default CreationTitle;
