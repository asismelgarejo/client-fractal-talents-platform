/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { TalentSalary } from "@/types/Talent";
import FormSalaryRange from "../FormComponents/SalaryRangeForm";
import CreationTitle from "../common/CreationTitle";

type DialogAddSalaryRangeProps = {
  closeModal(): void;
};

const DialogAddSalaryRange = forwardRef<RefObject, DialogAddSalaryRangeProps>(
  ({ closeModal }, ref) => {
    const dispatch = useDispatch();
    const talentData = useSelector((root: IRootState) => root.talent);

    const { control, handleSubmit, getValues, setValue } =
      useForm<TalentSalary>({
        defaultValues: {
          maximum: talentData.salary.maximum,
          minimum: talentData.salary.minimum,
          currency: talentData.salary.currency,
        },
      });
    const onSubmit: SubmitHandler<TalentSalary> = async (data) => {
      console.log(data);
      dispatch.talent.UPDATE_SALARY(data);
      closeModal();
    };
    return (
      <CustomDialog ref={ref}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
            <div className="space-y-5 ">
              <CreationTitle
                headerTexts={{
                  create: "Agrega tu banda salarial",
                }}
                subheaderTexts={{
                  create: "Agrega el rango de tus expectativas salariales.",
                }}
              />
              <FormSalaryRange />
            </div>

            <div className="flex grow space-x-3">
              <CustomButton
                className="w-full"
                variant="gray_2"
                onClick={() => closeModal()}
              >
                Cancelar
              </CustomButton>
              <CustomButton className="w-full" type="submit">
                Agregar
              </CustomButton>
            </div>
          </CardTwo>
        </form>
      </CustomDialog>
    );
  }
);

export default DialogAddSalaryRange;
