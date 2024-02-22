import React from "react";
import CustomInput from "../common/CustomInput";

const SocialNetworksForm = () => {
  return (
    <div className="space-y-2">
      <CustomInput label="Link de LinkedIn" className="rounded-md" />
      <CustomInput label="Link de GitHub" className="rounded-md" />
    </div>
  );
};

export default SocialNetworksForm;
