import { useEffect, useState } from "react";
import { AnswerTheQuestion } from "../../services/faq";

const Faq = () => {
  const [questions, setquestions] = useState([]);
  useEffect(() => {
    const FAQuestion = async () => {
      try {
        const res = await AnswerTheQuestion.getCourse();
        setquestions(res?.data?.data.questions);
      } catch (error) {
        console.log(error);
      }
    };
    FAQuestion();
  }, []);
  return (
    <section className="faq --scpadding">
      <div className="container">
        <div className="faq__inner">
          <div className="heading --noline --center">
            <h2 className="heading__title title --t2">
              Câu hỏi <span className="color--primary">thường gặp</span>
            </h2>
          </div>
          <div className="faq__list">
            <div className="accordion">
              <h3 className="accordion__title label">Thông tin chung</h3>
              {questions.length > 0 &&
                questions.map((item, index) => {
                  return (
                    <div className="accordion__content" key={index}>
                      <div className="accordion__content-title">
                        <h4>
                          <strong>{item.question}</strong>
                        </h4>
                      </div>
                      <div className="accordion__content-text">
                        {item.answer}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
