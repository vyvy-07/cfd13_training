import axiosInstance from "../utils/axiosInstance";

export const AuthService = {
  //post truyền payload vào
  login(payload = {}) {
    return axiosInstance.post(`/customer/login`, payload);
  },
  register(payload = {}) {
    return axiosInstance.post(`/customer/register`, payload);
  },
  getProfile(token = 0 && "") {
    return axiosInstance.get(
      `/customer/profiles`
      //{
      //  headers: {
      //    Authorization: `Bearer ${token}`,
      //  },
      //}
    );
  },
  putProfile(payload = {}, token = 0 && "") {
    return axiosInstance.put(`/customer/profiles`, payload, {
      headers: {
        //Authorization: `Bearer ${token}`,
        "Content-Type": `multipart/form-data`,
      },
    });
  },
};
