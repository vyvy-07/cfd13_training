import axiosInstance from "../utils/axiosInstance";

export const CourseService = {
  getCourse(query = "") {
    return axiosInstance.get(`/courses${query}`);
  },
  getCourseSlug(slug = "") {
    return axiosInstance.get(`/courses${slug ? "/" + slug : ""}`);
  },
};
