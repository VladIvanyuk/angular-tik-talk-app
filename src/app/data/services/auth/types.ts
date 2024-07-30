export interface ILogin {
  username: string | null;
  password: string | null;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
