import { useEffect } from "react";
import CourseItem from "../../component/CourseItem";

const Coursecoming = ({ courses }) => {
  //  const { courses } = course || {};

  useEffect(() => {
    function courseComingList() {
      let courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
        cellAlign: "left",
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        dragThreshold: 0,
        wrapAround: true,
      });

      $(".coursecoming .control .control__next").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("next");
      });
      $(".coursecoming .control .control__prev").on("click", function (e) {
        e.preventDefault();
        courseComingSlider.flickity("previous");
      });
    }
    if (courses?.length > 0) {
      courseComingList();
    }
  }, [courses]);

  return (
    <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      <div className="coursecoming__list" id="coursecoming__slider">
        {courses?.length > 0 &&
          courses?.map((item, index) => {
            return (
              <CourseItem type="coming" key={item?.id || index} {...item} />
            );
          })}
      </div>
    </section>
  );
};

export default Coursecoming;
