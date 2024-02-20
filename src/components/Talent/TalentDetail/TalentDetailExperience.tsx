import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddExperience from "@/components/dialogs/DialogAddExperience";
import DialogConfirmation from "@/components/dialogs/DialogConfirmation";
import { IRootState } from "@/store";
import { AddIcon, EditIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

type ExperienceCardProps = {
  companyLogo: string;
  companyName: string;
  experienceName: string;
};
const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyLogo,
  companyName,
  experienceName,
}) => {
  const refExperience = useRef<RefObject>(null);
  const refConfirmation = useRef<RefObject>(null);
  const { user: userData, talent: talentData } = useSelector(
    (root: IRootState) => root
  );
  const [logoUrl, setLogoUrl] = useState(companyLogo);

  return (
    <>
      <CardOne className="py-4">
        <div className="flex space-x-2">
          <div className="rounded rounded-full overflow-hidden">
            <Image
              src={logoUrl}
              placeholder="blur"
              draggable={false}
              blurDataURL="/assets/edificio.png"
              onError={(e) => setLogoUrl("/assets/edificio.png")}
              alt="fractal"
              width={48}
              height={48}
              style={
                {
                  // width: "auto",
                  // height: "auto",
                }
              }
            />
          </div>
          <div>
            <h4 className="text-black font-bold">{companyName}</h4>
            <p className="text-sm text-gray-500 space-x-2">
              <span>{experienceName}</span>
              <span>2015 - 2021</span>
              <span>6 años</span>
            </p>
          </div>
          {userData && (
            <div
              className="flex items-center ml-auto"
              style={{ marginLeft: "auto" }}
            >
              <button
                onClick={() => {
                  refExperience.current?.showDialog();
                }}
                type="button"
              >
                <EditIcon className="fill-gray-500 text-2xl" />
              </button>
            </div>
          )}
        </div>
      </CardOne>
      <DialogAddExperience
        editing
        ref={refExperience}
        deleteRecord={() => refConfirmation.current?.showDialog()}
        closeModal={() => {
          refExperience.current?.showDialog();
        }}
      />
      <DialogConfirmation
        ref={refConfirmation}
        type="warning"
        description="¿Está seguro de eliminar la experiencia?"
        cancel={() => {
          refConfirmation.current?.showDialog();
        }}
        confirm={() => {
          refConfirmation.current?.showDialog();
          refExperience.current?.showDialog();
        }}
      />
    </>
  );
};

const TalentDetailExperience = () => {
  const refExperience = useRef<RefObject>(null);
  const { user: userData, talent: talentData } = useSelector(
    (root: IRootState) => root
  );
  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        className="absolute right-0 top-0 p-1"
        onClick={() => refExperience.current?.showDialog()}
      >
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <h2 className="text-gray-500 font-bold text-sm">Experiencia</h2>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        {talentData.experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            companyLogo={experience.company.logoUrl}
            companyName={experience.company.name}
            experienceName={experience.name}
          />
        ))}
      </div>
      <DialogAddExperience
        editing={false}
        ref={refExperience}
        closeModal={() => {
          refExperience.current && refExperience.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailExperience;
