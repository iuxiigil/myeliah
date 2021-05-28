import React, { useRef, useEffect } from "react";
import Parallax from "parallax-js";

import Button from "../../Control/Button";

export default function IntroductionThree() {
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  useEffect(() => {
    let parallax1 = new Parallax(bg1.current);
    let parallax2 = new Parallax(bg2.current);
    return () => {
      parallax1.disable();
      parallax2.disable();
    };
  }, []);
  return (
    <div className="introduction-three">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <div className="introduction-three__image">
              <div className="introduction-three__image__background">
                <img
                  src="/assets/images/introduction/IntroductionThree/bg.png"
                  alt="background"
                />
              </div>

              <div className="introduction-three__image__detail">
                <div className="image__item">
                  <div ref={bg1} className="wrapper">
                    <img
                      data-depth="0.3"
                      src="/assets/images/introduction/IntroductionThree/img-1.png"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="image__item">
                  <div ref={bg2} className="wrapper">
                    <img
                      data-depth="0.8"
                      data-invert-x
                      data-invert-y
                      src="/assets/images/introduction/IntroductionThree/img-2.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="introduction-three__content">
              <h5>關於自然護膚中心</h5>
              <h3>
                <span>天然 </span>
                護膚
                <br />
                專業
              </h3>
              <div className="more-description">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/introduction/IntroductionThree/decoration.png"
                  }
                  alt="Decoration"
                />
                <span>治愈頑固粗糙皮膚的最佳治療方法</span>
              </div>
              <p>
                除了非常適合敏感和乾燥的皮膚，天然護膚品也可以改善油性肌膚和痘痘肌。許多以“祛痘藥”為賣點的傳統護膚品都含有硫酸鹽和其他刺激性化學成分，會使皮膚失去其天然油脂。痘痘本身是由於油脂分泌過多導致毛孔堵塞，然後被細菌感染而產生的。
              </p>
              <Button color="dark" content="Read more" action="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
