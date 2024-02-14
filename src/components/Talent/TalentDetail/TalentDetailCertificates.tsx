import CardOne from "@/components/common/Cards/CardOne";
import { UploadIcon } from "@/utils/icons";
import Image from "next/image";

const TalentDetailCertificates = () => {
  return (
    <section className="space-x-4 flex">
      <TalentDetailCertificateCard />
      <TalentDetailCertificateCard />
      <TalentDetailCertificateCardUpload />
    </section>
  );
};
const TalentDetailCertificateCard = () => {
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
          <h4 className="text-sm">Certificado en Frontend</h4>
          <span className=" text-xs">PDF</span>
        </div>
      </div>
    </CardOne>
  );
};
const TalentDetailCertificateCardUpload = () => {
  return (
    <CardOne className="flex">
      <div className="flex flex-col items-center m-auto">
        <span className="rounded bg-gray-200 rounded-full p-1">
          <UploadIcon className="text-[18.5px]" />
        </span>
        <p className="text-primary-500 text-sm font-semibold">
          Sube un archivo
        </p>
      </div>
    </CardOne>
  );
};

export default TalentDetailCertificates;
