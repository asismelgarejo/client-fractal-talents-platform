type Currency = "USD" | "PEN";
export type TalentSalary = {
  minimum: number;
  maximum: number;
  currency: Currency;
};

export type Level = {
  name: string;
  id: number;
};

export type Language = {
  name: string;
  id: number;
};
export type LanguageData = {
  language: Language;
  level: Level;
};

export type Talent = {
  salary: TalentSalary;
  languages: LanguageData[];
};
