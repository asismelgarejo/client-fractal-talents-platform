import { USER_ROLES } from "./ROLES";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  roles: USER_ROLES[];
};
