import CardOne from "@/components/common/Cards/CardOne";
import Image from "next/image";
import React from "react";

const EducationCard = () => {
  return (
    <CardOne>
      <div className="flex space-x-2">
        <Image
          src="/assets/fractal_co.png"
          alt="fractal"
          width={48}
          height={48}
        />
        <div>
          <h4 className="text-black font-bold">
            Pontificia Universidad Católica del Perú
          </h4>
          <p className="text-sm text-gray-500 space-x-2">
            <span>Bachiller en Ingeniería de sistemas</span>
            <span>2015 - 2021</span>
          </p>
        </div>
      </div>
    </CardOne>
  );
};

const TalentDetailEducation = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-gray-500 font-bold text-sm">Educación</h2>
      <div className="flex  flex-wrap items-center space-y-2">
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
};

export default TalentDetailEducation;
