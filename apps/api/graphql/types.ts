import { YogaInitialContext } from 'graphql-yoga';

type Role = {
  id: number;
  name: string | null;
  admin: boolean | null;
};

export type GraphQlContextType = YogaInitialContext & {
  user?: {
    authToken?: string;
    id: string | null;
    name: string | null;
    email: string | null;
    roles: Array<Role | undefined>;
  } | null;
};
