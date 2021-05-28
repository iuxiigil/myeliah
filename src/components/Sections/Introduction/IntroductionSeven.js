import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";

import Button from "../../Control/Button";
import SectionTitleOne from "../SectionTitle/SectionTitleOne";
import Quantity from "../../../components/Control/Quantity";

export default function IntroductionSeven({ data }) {
  const [currentAccordionIndex, setCurrentAccordionIndex] = useState(1);
  const [quantity, setQuantity] = useState();
  return (
    <div className="introduction-seven">
      <div className="introduction-seven__wrapper -top">
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6">
                <div className="introduction-seven__wrapper__content__detail">
                  <h5>純天然煉製</h5>
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    美麗動人
                  </SectionTitleOne>
                  <h3>$125.00</h3>
                  <p>
                    工作越來越忙碌、生活中的責任越來越大、壓力、勞累理所當然也跟著累積，您知道嗎？其實，疲勞不只會顯現在身體上，肌膚狀態、臉色，更會直接顯示出您的狼狽唷！頂級養護產品，透過美容師溫柔的雙手，層層塗抹滲透肌膚，為乾燥枯黃的面容，補足缺失的養份與水份，讓臉龐找回失去以久的彈潤透亮～{" "}
                  </p>
                  <Button
                    action={process.env.PUBLIC_URL + "#"}
                    color="dark"
                    content="More info"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionSeven/1.png"
            }
            alt="Section image"
          />
        </div>
      </div>
      <div className="introduction-seven__wrapper -bottom">
        <div className="introduction-seven__wrapper__image">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/introduction/IntroductionSeven/2.png"
            }
            alt="Section image"
          />
        </div>
        <div className="introduction-seven__wrapper__content">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-12 col-lg-9 col-xl-6 ml-auto">
                <div className="introduction-seven__wrapper__content__detail">
                  <SectionTitleOne hideDecoration spaceBottom="1.2em">
                    使用說明
                  </SectionTitleOne>
                  <Accordion
                    defaultActiveKey={parseInt(currentAccordionIndex)}
                    onSelect={(i) => setCurrentAccordionIndex(i)}
                  >
                    {data &&
                      data.map((item, index) => (
                        <Card key={index}>
                          <Accordion.Toggle as={Card.Header} eventKey={item.id}>
                            {item.header}
                            <i
                              className={`fa fa-angle-${
                                parseInt(currentAccordionIndex) === item.id
                                  ? "up"
                                  : "down"
                              }`}
                            />
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={item.id}>
                            <Card.Body>
                              <p>{item.body}</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ))}
                  </Accordion>
                  <div className="quantity-group">
                    <div className="quantity-group__controller">
                      <span>Quantity:</span>
                      <Quantity getQuantity={setQuantity} />
                    </div>
                    <Button
                      action={process.env.PUBLIC_URL + "#"}
                      color="dark"
                      content="Purchase"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
