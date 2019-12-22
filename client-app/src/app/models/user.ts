export interface IUser {
    userName: string,
    displayName: string,
    token: string,
    image?: string
}

export interface IUserFormValues {
  email: string;
  password: string;
  token: string;
  displayName?: string,
  username?: string
}