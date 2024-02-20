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
export type Country = {
  id: number;
  name: string;
};
export type City = {
  id: number;
  name: string;
};
export type Certificate = {
  id: number;
  name: string;
};
export type Skill = {
  id: number;
  name: string;
};
export type Experience = {
  id: number;
  name: string;
  company: Company;
};
export type Company = {
  id: number;
  name: string;
  logoUrl: string;
};

export type Talent = {
  name: string;
  lastName: string;
  profile: string;
  profileImage: string;
  description: string;
  cellphone: string;
  salary: TalentSalary;
  languages: LanguageData[];
  certificates: Certificate[];
  country: Country;
  city: Country;
  technicalSkills: Skill[];
  softSkills: Skill[];
  experiences: Experience[];
};
