export interface UserModel {
  username: string;
  email: string;
  dateOfBirth: string; // Preporučuje se korišćenje tipa Date ukoliko radite sa datumima
  firstName: string;
  lastName: string;
  permission: boolean;
}

export interface ClientModel {
  id: number; // Ili number, zavisno od vašeg slučaja upotrebe
  uniqueCardNumber: string;
  numberOfTrainings: number;
  user: UserModel;
}