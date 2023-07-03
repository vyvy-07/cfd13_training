const COURSE_PATH = "/course";
const PROFILE_PATH = "/profile";
const BLOG_PATH = "/blog";

export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  PASS: "/pass",
  PAYMENT: "/Payment",
  PRIVACY: "/privacy",
  //BlogPage
  BLOG: BLOG_PATH,
  BLOG_DETAIL: BLOG_PATH + "/:slug",
  //CoursePage
  COURSES: COURSE_PATH,
  REGISTER: "/register" + "/:slug",
  COURSE_DETAIL: COURSE_PATH + "/:slug",
  //ProfileLayout
  PROFILE: {
    INDEX: PROFILE_PATH,
    COURSE: PROFILE_PATH + "/mycourses",
    PAYMENT: PROFILE_PATH + "/mypayment",
  },
  CONTACT: "/contact",
};
