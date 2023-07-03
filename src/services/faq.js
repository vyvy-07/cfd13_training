import axiosInstance from "../utils/axiosInstance";

export const AnswerTheQuestion = {
  getCourse(query = "") {
    return axiosInstance.get(`/questions${query}`);
  },
  getCourseSlug(slug = "") {
    return axiosInstance.get(`/questions${slug ? "/" + slug : ""}`);
  },
};
