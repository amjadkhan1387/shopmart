import { accessToken, adminId, adminName, loginStatus } from './urls';

export const AdminAuthData = (id: any, name: any, token: any, status: any) => {
  try {
    localStorage.setItem(adminId, id);
    localStorage.setItem(adminName, name);
    localStorage.setItem(accessToken, token);
    localStorage.setItem(loginStatus, status);
  } catch (error) {
    console.log(error);
  }
};
