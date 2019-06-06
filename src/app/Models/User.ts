// Model or Interface for what a NextUser should look like
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  image?: string;
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}