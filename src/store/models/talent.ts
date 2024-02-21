import { Talent } from "@/types/Talent";
import { createModel } from "@rematch/core";

const INITIAL_STATE: Talent = {
  name: "Eleanor (Ellie)",
  lastName: "Williams",
  profile: "Superviviente, Cazadora y Experta en armas",
  description:
    "Superviviente experimentada, experta en combate, navegación y supervivencia en entornos hostiles. Muy competente en la caza, rastreo y defensa personal. Comprometida con la protección de aquellos en quienes confía y la búsqueda de un propósito en un mundo devastado.",
  profileImage:
    "https://asml-golang-and-s3.s3.sa-east-1.amazonaws.com/ellie2.jpg",
  cellphone: "(555) 555-1234",
  certificates: [
    {
      id: 1,
      name: "Certificado en Primeros Auxilios y Atención Médica de Emergencia",
    },
    { id: 2, name: "Certificado en Supervivencia en Entornos Hostiles" },
  ],
  city: {
    id: 1,
    name: "Boston",
  },
  country: {
    id: 1,
    name: "USA",
  },
  experiences: [
    {
      id: 1,
      name: "Aprendiz de Supervivencia y Defensa",
      company: {
        id: 1,
        name: "Luciérnagas",
        logoUrl:
          "https://asml-golang-and-s3.s3.sa-east-1.amazonaws.com/butterfly.jpg",
      },
    },
    {
      id: 2,
      name: "Superviviente  y Cazadora",
      company: {
        id: 2,
        name: "Freelance",
        logoUrl: "/asdasdasd",
      },
    },
    {
      id: 3,
      name: "Guardia de Seguridad",
      company: {
        id: 2,
        name: "Jackson",
        logoUrl: "/asdasdasd",
      },
    },
  ],
  softSkills: [
    {
      id: 5,
      name: "Adaptabilidad",
    },
    {
      id: 6,
      name: "Trabajo en Equipo",
    },
    {
      id: 7,
      name: "Resolución de Problemas",
    },
    {
      id: 8,
      name: "Resistencia Mental",
    },
  ],
  technicalSkills: [
    {
      id: 1,
      name: "Manejo de Armas de Fuego",
    },
    {
      id: 2,
      name: "Técnicas de Rastreo",
    },
    {
      id: 3,
      name: "Supervivencia en la Naturaleza",
    },
    {
      id: 4,
      name: "Mantenimiento de Equipos",
    },
  ],
  salary: {
    maximum: 3000,
    minimum: 2500,
    currency: "PEN",
  },
  languages: [
    {
      language: {
        id: 1,
        name: "English",
      },
      level: {
        id: 1,
        name: "Advanced",
      },
    },
    {
      language: { id: 2, name: "Spanish" },
      level: {
        id: 1,
        name: "Advanced",
      },
    },
  ],
};

export const talentModel = createModel()({
  state: INITIAL_STATE,
  reducers: {
    UPDATE_SALARY(state, salary) {
      return { ...state, salary };
    },
  },

  effects: (dispatch) => ({
    async: (_, store) => {},
  }),
});
