import React, { useEffect, useState } from "react";
import CourseItem from "../../component/CourseItem";
import { CourseService } from "../../services/CourseService";
import useQuery from "../../hooks/useQuery";
import { useParams } from "react-router-dom";

const CoursesDetailItem = () => {
  const { slug } = useParams();
  const { data } = useQuery(() => CourseService.getCourseSlug());
  const handleFilter = (item) => {
    return item.slug !== slug;
  };
  const newArr = data?.courses.filter(handleFilter);
  return (
    <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
          {newArr?.length > 0 &&
            newArr.map((item, index) => {
              return <CourseItem key={index} {...item} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default CoursesDetailItem;
