// Model or Interface for what a NextUser should look like
export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    street?: string;
    city?: string;
    state?: string;
  },
  image?: string;
}