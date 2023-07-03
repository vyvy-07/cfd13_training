import axiosInstance from "../utils/axiosInstance";

export const CourseOder = {
  getCourseOrder(token) {
    return axiosInstance.get(
      `/orders/courses/me`
      //{
      //  headers: {
      //    Authorization: `Bearer ${token}`,
      //  },
      //}
    );
  },
  getPaymentOrder(token) {
    return axiosInstance.get(
      `/orders/me`
      //{
      //  headers: {
      //    Authorization: `Bearer ${token}`,
      //  },
      //}
    );
  },
  postCourseOrder(payload = {}, token) {
    return axiosInstance.post(
      `/orders`,
      payload
      //{
      //  headers: {
      //    Authorization: `Bearer ${token}`,
      //  },
      //}
    );
  },
};
