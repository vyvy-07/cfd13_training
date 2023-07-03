import React from "react";
import { useAuthen } from "../../component/AuthenContext";
import CourseItem from "../../component/CourseItem";

const MyCourse = () => {
  const { profileCourse } = useAuthen();
  console.log("hmm :>> ", profileCourse);
  return (
    <div className="tab__content-item" style={{ display: "block" }}>
      <div className="courses__list">
        {profileCourse?.orders?.length > 0
          ? profileCourse?.orders?.map((item, index) => {
              return (
                item?.course && <CourseItem key={item.id} {...item?.course} />
              );
            })
          : "Bạn chưa đăng kí khóa học nào!"}
      </div>
    </div>
  );
};

export default MyCourse;
