export interface ClientModel {
    id: string,
    uniqeCardNumber: string,
    nubmerOfTrainings: number,
    user: {
      username: string,
      email: string,
      dateOfBirth: string,
      firstName: string,
      lastName: string,
      permission: boolean
    };
}