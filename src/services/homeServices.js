import axiosInstance from "../utils/axiosInstance";

export const homeServices = {
  getInfoHero(query = "") {
    return axiosInstance.get(`/teams${query}`);
  },
  getGallery(query = "") {
    return axiosInstance.get(`/galleries${query}`);
  },
  getRates(query = "") {
    return axiosInstance.get(`/rates${query}`);
  },
};
