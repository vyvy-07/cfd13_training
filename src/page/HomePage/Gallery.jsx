import React from "react";

const Gallery = ({ galleries }) => {
  const galleryItem = galleries?.[0]?.images;
  return (
    <section className="gallery">
      <div className="heading --noline --center">
        <h2 className="heading__title title --t2">
          <span className="color--primary">CFD Circle</span> Là Một Team
        </h2>
      </div>
      <div className="list">
        {galleryItem?.length > 0 &&
          galleryItem?.map((item, index) => {
            console.log("item :>> ", item);
            return <img data-flickity-lazyload={item} key={index} alt=""></img>;
          })}

        {/*<img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01129.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00541.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00545.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00662-1.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/beauty-1618471253214-2.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc6912.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01147.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00677.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00678-1.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc6977.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc00688.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc01114.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/img-001-(1).jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5918-2.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5506.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5511.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5587-2.jpg"
          alt=""
        />
        <img
          data-flickity-lazyload="https://cfdcircle.vn/files/about/Team/dsc5637-1.jpg"
          alt=""
        />*/}
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  );
};

export default Gallery;
