import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import CustomRating from "@/components/common/CustomRating";
import DialogLanguage from "@/components/dialogs/DialogLanguage";
import { AddIcon, EditIcon } from "@/utils/icons";
import React, { useRef } from "react";

const LanguageCard = () => {
  const refLangauge = useRef<RefObject>(null);

  return (
    <>
      <CardOne className="py-4">
        <div className="flex space-x-4 w-full">
          <div>
            <h4 className="text-md font-bold">Inglés</h4>
            <span className="text-gray-500 text-sm">Avanzado</span>
          </div>
          <div className="flex items-center w-fit">
            <CustomRating />
          </div>
          <div
            className="flex items-center ml-auto"
            style={{ marginLeft: "auto" }}
          >
            <button
              onClick={() => refLangauge.current?.showDialog()}
              type="button"
            >
              <EditIcon className="fill-gray-500 text-2xl" />
            </button>
          </div>
        </div>
      </CardOne>
      <DialogLanguage
        ref={refLangauge}
        closeModal={() => {
          refLangauge.current && refLangauge.current.showDialog();
        }}
      />
    </>
  );
};

const TalentDetailLanguages = () => {
  const refLangauge = useRef<RefObject>(null);

  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        className="absolute right-0 top-0 p-1"
        onClick={() => refLangauge.current?.showDialog()}
      >
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <h2 className="text-gray-500 font-bold text-sm">Idiomas</h2>
      <div className="flex  flex-wrap items-center space-y-2">
        <LanguageCard />
        <LanguageCard />
      </div>
      <DialogLanguage
        ref={refLangauge}
        closeModal={() => {
          refLangauge.current && refLangauge.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailLanguages;