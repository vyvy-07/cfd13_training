import Faq from "../../component/Fqa";
import useQuery from "../../hooks/useQuery";
import HeroHome from "./HeroHome";
import PageLoading from "../../component/Loading";
import Teams from "../../component/TeamsCFD/Teams";
import useDebounce from "../../hooks/useDebounce";
import { CourseService } from "../../services/courseService";
import { homeServices } from "../../services/homeServices";
import CoursePage from "../Course";
import CallRegister from "./CallRegister";
import Coursecoming from "./Coursecoming";
import FeaturedHomePage from "./Featured";
import Gallery from "./Gallery";
import RateHome from "./Rate";

const HomePage = () => {
  const { data: course, loading: loadingCourse } = useQuery(() =>
    CourseService.getCourse()
  );
  const { courses } = course || {};
  const { data: gallery, loading: loadingGallery } = useQuery(() =>
    homeServices.getGallery()
  );
  const { galleries } = gallery || [];

  const { data: rate, loading: loadingRates } = useQuery(() =>
    homeServices.getRates()
  );
  const { rates } = rate || [];

  const allLoading = loadingCourse || loadingGallery || loadingRates;
  const isLoading = useDebounce(allLoading, 500);
  if (isLoading) {
    return <PageLoading />;
  }
  return (
    <main className="mainwrapper">
      <HeroHome />
      <Coursecoming {...course} />
      <CoursePage />
      <Teams />
      <FeaturedHomePage />
      {/* --------------------------------Testimonial-------------------------------- */}

      <RateHome rates={rate} />
      {/* --------------------------------faq-------------------------------- */}
      <Faq />
      <Gallery {...gallery} />
      <CallRegister />
    </main>
  );
};

export default HomePage;
