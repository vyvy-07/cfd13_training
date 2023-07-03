import React from "react";
import { formatDate } from "../../utils/format";

const Contentdetail = ({ schedule, description, content, required, teams }) => {
  return (
    <section className="contentdetail">
      <div className="content">
        <div className="container">
          <div className="contentrow ctintro">
            <h3 className="contentrow__title title --t3">Giới thiệu</h3>
            <div className="contenteditor">
              <div
                //className="content"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="videowrap">
                <iframe
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/C7GoVPoamdM?rel=0"
                  width={560}
                  height={315}
                  frameBorder={0}
                  allowFullScreen="allowfullscreen"
                />
              </div>
            </div>
          </div>
          <div className="contentrow ctschedule">
            <h3 className="contentrow__title title --t3">Lịch học</h3>
            <div className="ctschedule__box">
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Khai giảng</span>
                  <p className="title --t3">
                    {formatDate(schedule?.startDate)}
                  </p>
                </div>

                <div className="labeltext">
                  <span className="label --blue">Ngày học</span>
                  <p className="title --t3">{schedule?.days}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Thời gian</span>
                  <p className="title --t3">{schedule?.time}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Địa điểm</span>
                  <p className="title --t3">{schedule?.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contentrow ctlession">
            <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
            <div className="accordion">
              {content?.length > 0 &&
                content?.map((item, index) => {
                  return (
                    <>
                      <div className="accordion__content" key={index}>
                        <div className="accordion__content-title">
                          <h4>
                            <strong>{item?.title}</strong>
                          </h4>
                        </div>
                        <div className="accordion__content-text --transparent">
                          {item?.description &&
                            item?.description.map((des) => {
                              return (
                                <>
                                  <div className="item --lock">
                                    <p>
                                      <i>
                                        <img
                                          src="https://cfdcircle.vn/img/iconlock.svg"
                                          alt="CFD Circle"
                                        />
                                      </i>
                                      <span>{des}</span>
                                    </p>
                                  </div>
                                </>
                              );
                            })}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="contentrow ctrequest">
          <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
          <div className="ctrequest__content">
            {required?.length > 0 &&
              required.map((item, index) => {
                return (
                  <>
                    <p key={index}>{item}</p>
                  </>
                );
              })}
          </div>
        </div>
        <div className="contentrow ctteacher">
          <h3 className="contentrow__title title --t3">Giảng viên</h3>
          <div className="ctteacher__content">
            {teams?.length > 0 &&
              teams.map((team) => {
                return (
                  <>
                    <div className="itemteacher">
                      <div className="itemteacher__avatar">
                        <img src={team.image} alt="CFD Circle" />
                      </div>
                      <div className="itemteacher__info">
                        <div className="itemteacher__info-name">
                          <p className="title --t3">{team.name}</p>
                          <span className="label badge --teacher">
                            {team.tags}
                          </span>
                        </div>
                        <h5 className="itemteacher__info-pos label">
                          {team.jobTitle}
                        </h5>
                        <p className="itemteacher__info-des">
                          {team.description}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contentdetail;
