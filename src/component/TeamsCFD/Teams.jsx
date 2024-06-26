import { useEffect, useState } from "react";
import useQuery from "../../hooks/useQuery";
import { homeServices } from "../../services/homeServices";

const Teams = () => {
  const { data: teams } = useQuery(() => homeServices.getInfoHero());
  const [myTeams, setMyTeams] = useState(teams?.data);
  function teacherSlider() {
    let courseComingSlider = $(".teacher .teacher__list .teacher__list-inner");

    courseComingSlider.flickity({
      cellAlign: "left",
      contain: true,
      prevNextButtons: false,
      pageDots: false,
      dragThreshold: 0,
      freeScroll: true,
    });

    $(".teacher .control .control__next").on("click", function (e) {
      e.preventDefault();
      courseComingSlider.flickity("next");
    });
    $(".teacher .control .control__prev").on("click", function (e) {
      e.preventDefault();
      courseComingSlider.flickity("previous");
    });
    courseComingSlider.flickity("resize");
  }
  //console.log("myTeams :>> ", myTeams);

  useEffect(() => {
    setMyTeams(teams?.teams);
    //console.log("teams :>> ", teams);
  }, [teams]);

  useEffect(() => {
    //console.log("teams :>> ", teams);
    if (myTeams?.length > 0) {
      //console.log("myTeams :>> ", myTeams);

      setTimeout(() => {
        teacherSlider();
      }, 1000);
    }
  }, [myTeams]);

  if (myTeams?.length == 0) return null;

  return (
    <section className="teacher --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">
            Đội Ngũ <span className="color--primary">CFD Circle</span>
          </h2>
          <div className="heading__content">
            <p className="text">
              Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được tích
              luỹ từ những dự án thực tế sẽ đồng hành cùng bạn xuyên suốt quá
              trình học và con đường phát triển sự nghiệp.
            </p>
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
      </div>
      <div className="teacher__list">
        <div className="container">
          <div className="teacher__list-inner">
            {myTeams?.length > 0 ? (
              <>
                {myTeams.map((item, index) => (
                  <div className="teacher__list-item" key={item?.id || index}>
                    <div className="img">
                      <img src={item?.image} alt="Giảng viên CFD" />
                    </div>
                    <div className="info">
                      <p className="label">{item?.jobTitle}</p>
                      <h3 className="title --t3">{item?.name}</h3>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>

    //<section className="teacher --scpadding">
    //  <div className="container">
    //    <div className="heading">
    //      <h2 className="heading__title title --t2">
    //        Đội Ngũ <span className="color--primary">CFD Circle</span>
    //      </h2>
    //      <div className="heading__content">
    //        <p className="text">
    //          Đội ngủ giảng viên và mentor tâm huyết nhiều kinh nghiệm được tích
    //          luỹ từ những dự án thực tế sẽ đồng hành cùng bạn xuyên suốt quá
    //          trình học và con đường phát triển sự nghiệp.
    //        </p>
    //        <div className="control">
    //          <div className="control__prev">
    //            <img src="img/icon-btn-control.svg" alt="icon prev" />
    //          </div>
    //          <div className="control__next">
    //            <img src="img/icon-btn-control.svg" alt="icon next" />
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    //  <div className="teacher__list">
    //    <div className="container">
    //      {myTeams?.length > 0 &&
    //        myTeams?.map((item, index) => {
    //          return (
    //            <div className="teacher__list-inner">
    //              <div className="teacher__list-item" key={item?.id || index}>
    //                <div className="img">
    //                  <img src={item?.image} alt="Giảng viên CFD" />
    //                </div>
    //                <div className="info">
    //                  <p className="label">{item?.jobTitle}</p>
    //                  <h3 className="title --t3">{item?.name}</h3>
    //                </div>
    //              </div>
    //            </div>
    //          );
    //        })}

    //      {/*
    //        <div className="teacher__list-item">
    //          <div className="img">
    //            <img
    //              src="https://cfdcircle.vn/files/teachers/huy.jpg"
    //              alt="Giảng viên CFD"
    //            />
    //          </div>
    //          <div className="info">
    //            <p className="label">Fullstack Dev</p>
    //            <h3 className="title --t3">Nguyễn Đức Huy</h3>
    //          </div>
    //        </div>
    //        <div className="teacher__list-item">
    //          <div className="img">
    //            <img
    //              src="https://cfdcircle.vn/files/teachers/thien.jpg"
    //              alt="Giảng viên CFD"
    //            />
    //          </div>
    //          <div className="info">
    //            <p className="label">Senior Front-end Dev</p>
    //            <h3 className="title --t3">Lê Châu Hữu Thiện</h3>
    //          </div>
    //        </div>
    //        <div className="teacher__list-item">
    //          <div className="img">
    //            <img
    //              src="https://cfdcircle.vn/files/teachers/kiet.jpg"
    //              alt="Giảng viên CFD"
    //            />
    //          </div>
    //          <div className="info">
    //            <p className="label">Front-end Dev</p>
    //            <h3 className="title --t3">Huỳnh Anh Kiệt</h3>
    //          </div>
    //        </div>
    //        <div className="teacher__list-item">
    //          <div className="img">
    //            <img
    //              src="https://cfdcircle.vn/files/teachers/an.jpg"
    //              alt="Giảng viên CFD"
    //            />
    //          </div>
    //          <div className="info">
    //            <p className="label">Senior Front-End Dev</p>
    //            <h3 className="title --t3">Nguyễn Văn Thái An</h3>
    //          </div>
    //        </div>*/}
    //    </div>
    //  </div>
    //</section>
  );
};

export default Teams;
