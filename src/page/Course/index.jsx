import React from "react";
import useQuery from "../../hooks/useQuery";
import { Empty, Skeleton } from "antd";
import CourseItem from "../../component/CourseItem";
import { CourseService } from "../../services/courseService";

const CoursePage = () => {
  //tạo 1 state
  const { data: courses, loading } = useQuery(() => CourseService.getCourse());
  let arrCourses = courses?.courses || "";

  return (
    <main className="mainwrapper courses --ptop">
      <div className="container">
        <div className="textbox">
          <div className="container">
            <h2 className="title --t2">Tất cả khoá học</h2>
          </div>
        </div>
        <div className="courses__list">
          {!loading && arrCourses?.length === 0 && (
            <Empty
              description="Dữ liệu hiện không tìm thấy"
              style={{ margin: "0 auto" }}
            />
          )}
          {loading &&
            Array(6)
              .fill("")
              .map((_, index) => (
                <div key={index} className="courses__list-item">
                  <Skeleton active />
                </div>
              ))}
          {arrCourses?.length > 0 &&
            arrCourses.map((course, index) => {
              return (
                <>
                  <CourseItem key={course?.id || index} {...course} />
                </>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
