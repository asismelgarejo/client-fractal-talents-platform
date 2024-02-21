import { USER_ROLES } from "@/types/ROLES";

export type UserProfileResponse = {
  id: number;
  firstName: string;
  lastName: string;
  roles: USER_ROLES[];
};
