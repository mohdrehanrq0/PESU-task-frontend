import { AuthUserHttpClient } from '../../../lib/httpClient';

const PATH = {
  login: "/user/login",
  signup: "/user/signup",
  getUser: "/user",
  logout: "/user/logout",
};

export interface ILogin {
  email: string;
  password: string;
}

export interface ISignup {
  email: string;
  password: string;
  name: string;
}

export const loginService = async (payload: ILogin) => {
  return await AuthUserHttpClient.post(`${PATH.login}`, payload);
};

export const signupService = async (payload: ISignup) => {
  return await AuthUserHttpClient.post(`${PATH.signup}`, payload);
};

export const logoutUserService = async () => {
  return await AuthUserHttpClient.get(`${PATH.logout}`);
};

export const getUserDetails = async () => {
  return await AuthUserHttpClient.get(`${PATH.getUser}`);
};
