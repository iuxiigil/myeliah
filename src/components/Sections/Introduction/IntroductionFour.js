import Link from "next/link";

export default function IntroductionFour() {
  return (
    <div className="introduction-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="introduction-four__item -style-1">
                  <div className="introduction-four__item__content">
                    <h3>
                      適合 <span>當季</span>
                    </h3>
                    <h5>趨勢</h5>
                    <Link
                      href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}
                    >
                      <a className="btn -transparent -underline">購物去</a>
                    </Link>
                  </div>
                  <div className="introduction-four__item__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/introduction/IntroductionFour/1.png"
                      }
                      alt="適應季節趨勢"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mx-auto">
                <div className="introduction-four__item -style-2">
                  <div className="introduction-four__item__content">
                    <h3>
                      Skin <span>2.0</span>
                    </h3>
                    <h5>養生方式升級</h5>
                    <Link
                      href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}
                    >
                      <a className="btn -transparent -underline">購物去</a>
                    </Link>
                  </div>
                  <div className="introduction-four__item__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/introduction/IntroductionFour/2.png"
                      }
                      alt="適應季節趨勢"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="introduction-four__item -style-3">
                  <div className="introduction-four__item__content">
                    <h3>
                      <span>阿利馬</span>
                    </h3>
                    <h5>雅光系列</h5>
                    <Link
                      href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}
                    >
                      <a className="btn -transparent -underline">購物去</a>
                    </Link>
                  </div>
                  <div className="introduction-four__item__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/introduction/IntroductionFour/3.png"
                      }
                      alt="Meet trends of the season"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ml-auto">
                <div className="introduction-four__item -style-4">
                  <div className="introduction-four__item__content">
                    <h3>
                      以上 <span>70%</span> 折扣
                    </h3>
                    <h5>活動即將結束</h5>
                    <Link
                      href={process.env.PUBLIC_URL + "/shop/fullwidth-4col"}
                    >
                      <a className="btn -transparent -underline">購物去</a>
                    </Link>
                  </div>
                  <div className="introduction-four__item__image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/introduction/IntroductionFour/4.png"
                      }
                      alt="Meet trends of the season"
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
