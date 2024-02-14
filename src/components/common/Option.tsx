import Image from "next/image";
import CheckIcon from "../../assets/check-icon.svg";
export const Option = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2.5 hover:bg-gray-50">
      <div className="text-main-text font-bold text-base">Opción 1</div>
      <div>
        <Image src={CheckIcon} alt="check icon" width={15} height={15} />
      </div>
    </div>
  );
};

export default Option;
