import { Route, Routes } from "react-router-dom";
import { PATHS } from "./constants/path";
import { Suspense, lazy } from "react";
import PageLoading from "./component/Loading";
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ProfileLayout = lazy(() => import("./layouts/ProfileLayout"));
const AboutPage = lazy(() => import("./page/AboutPage"));
const BlogDetail = lazy(() => import("./page/BlogDetail"));
const BlogPage = lazy(() => import("./page/BlogPage"));
const ChangePass = lazy(() => import("./page/ChangePass"));
const ContactPage = lazy(() => import("./page/ContactPage"));
const CoursePage = lazy(() => import("./page/Course"));
const CourseDetail = lazy(() => import("./page/CourseDetail"));
const CourseOther = lazy(() => import("./page/CourseOrder"));
const HomePage = lazy(() => import("./page/HomePage"));
const Page404 = lazy(() => import("./page/Page404"));
const Payment = lazy(() => import("./page/Payment"));
const PrivacyPage = lazy(() => import("./page/PrivacyPage"));
const MyCourse = lazy(() => import("./page/StudentProfile/MyCourse"));
const MyPayment = lazy(() => import("./page/StudentProfile/MyPayment"));
const Profile = lazy(() => import("./page/StudentProfile/Profile"));
const PrivateRoute = lazy(() => import("./component/PrivateRoute"));

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.ABOUT} element={<AboutPage />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          {/* BlogPage */}
          <Route path={PATHS.BLOG} element={<BlogPage />} />
          <Route path={PATHS.BLOG_DETAIL} element={<BlogDetail />} />
          {/* CoursePage */}
          <Route path={PATHS.COURSES} element={<CoursePage />} />
          <Route path={PATHS.COURSE_DETAIL} element={<CourseDetail />} />
          <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />
          {/* PROFILE */}
          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.REGISTER} element={<CourseOther />} />
            <Route path={PATHS.PAYMENT} element={<Payment />} />
            <Route path={PATHS.PROFILE.INDEX} element={<ProfileLayout />}>
              <Route index element={<Profile />} />
              <Route path={PATHS.PROFILE.COURSE} element={<MyCourse />} />
              <Route path={PATHS.PROFILE.PAYMENT} element={<MyPayment />} />
            </Route>
          </Route>
          <Route path={PATHS.PASS} element={<ChangePass />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
