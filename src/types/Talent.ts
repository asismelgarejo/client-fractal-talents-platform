type Currency =  "USD" | "PEN"
export type TalentSalary = {
  minimum: number;
  maximum: number;
  currency: Currency;
};
export type TalentModel = {
  salary: TalentSalary;
};
