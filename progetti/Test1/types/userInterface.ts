export interface User {
  id: number;
  name: string;
  username: string; // Nota: JSONPlaceholder usa 'username', non 'surname'!
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}