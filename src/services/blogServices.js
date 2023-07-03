import axiosInstance from "../utils/axiosInstance";
export const blogServices = {
  getListBlog(query = "") {
    return axiosInstance.get(`/blogs`);
  },
  getDetailBlog(slug = "") {
    return axiosInstance.get(`/blogs${slug ? "/" + slug : null}`);
  },
};
