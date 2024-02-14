import CardOne from "@/components/common/Cards/CardOne";
import Image from "next/image";
import React from "react";

const ExperienceCard = () => {
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
          <h4 className="text-black font-bold">FRACTAL</h4>
          <p className="text-sm text-gray-500 space-x-2">
            <span>Desarrollador Full-Stack</span>
            <span>2015 - 2021</span>
            <span>6 años</span>
          </p>
        </div>
      </div>
    </CardOne>
  );
};

const TalentDetailExperience = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-gray-500 font-bold text-sm">Experiencia</h2>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default TalentDetailExperience;
