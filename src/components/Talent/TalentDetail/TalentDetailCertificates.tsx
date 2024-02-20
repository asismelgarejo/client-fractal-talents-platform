import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import DialogCertification from "@/components/dialogs/DialogCertification";
import { IRootState } from "@/store";
import { UploadIcon } from "@/utils/icons";
import Image from "next/image";
import { useRef } from "react";
import { useSelector } from "react-redux";

const TalentDetailCertificateCardUpload = () => {
  const refFile = useRef<RefObject>(null);

  return (
    <>
      <CardOne
        className="flex cursor-pointer"
        onClick={() => refFile.current && refFile.current.showDialog()}
      >
        <div className="flex flex-col items-center m-auto">
          <span className="rounded bg-gray-200 rounded-full p-1">
            <UploadIcon className="text-[18.5px]" />
          </span>
          <p className="text-primary-500 text-sm font-semibold">
            Sube un archivo
          </p>
        </div>
      </CardOne>
      <DialogCertification
        ref={refFile}
        closeModal={() => {
          refFile.current && refFile.current.showDialog();
        }}
      />
    </>
  );
};

const TalentDetailCertificates = () => {
  const talentData = useSelector((root: IRootState) => root.talent);

  return (
    <section className="space-x-4 flex">
      {talentData.certificates.map((certificate) => (
        <TalentDetailCertificateCard
          key={certificate.id}
          title={certificate.name}
        />
      ))}
      <TalentDetailCertificateCardUpload />
    </section>
  );
};

type TalentDetailCertificateCardProps = {
  title: string;
};
const TalentDetailCertificateCard: React.FC<
  TalentDetailCertificateCardProps
> = ({ title }) => {
  return (
    <CardOne>
      <div className="space-y-2">
        <div className="max-h-[100px] overflow-hidden">
          <Image
            src={"/assets/certificate.jpg"}
            alt="certificate"
            className="w-full"
            width={200}
            height={200}
          />
        </div>
        <div className="text-gray-500">
          <h4 className="text-sm">{title}</h4>
          <span className=" text-xs">PDF</span>
        </div>
      </div>
    </CardOne>
  );
};

export default TalentDetailCertificates;
