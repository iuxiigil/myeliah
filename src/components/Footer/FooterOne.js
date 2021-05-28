import Link from "next/link";
import SubcribeEmail from "../Other/SubcribeEmail";

import SocialIcons from "../Other/SocialIcons";
import footerLinks from "../../data/footer/links.json";
import footerInfomation from "../../data/footer/info.json";
import multilingual from "../../common/multilingual";
//

export default function FooterOne() {
  return (
    <div className="footer-one">
      <div className="container">
        <div className="footer-one__header">
          <div className="footer-one__header__logo">
            <Link href={process.env.PUBLIC_URL + "/homepages/homepage1"}>
              <a>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logon.png"}
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="footer-one__header__newsletter">
            <span>{multilingual("footer.SubscribeNews")}:</span>
            <SubcribeEmail
              mailchimpUrl="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
              placeholder="Enter your email"
              btnContent={<i className="fas fa-paper-plane" />}
              className="footer-one-newsletter"
            />
          </div>
          <div className="footer-one__header__social">
            <SocialIcons className="-border" />
          </div>
        </div>
        <div className="footer-one__body">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -info">
                <h5 className="footer-title">
                  {multilingual("footer.contactInfo")}
                </h5>
                <p>
                  {multilingual("footer.addresstitle")}{" "}
                  <span>{multilingual("footer.address")}</span>
                </p>
                <p>
                  {multilingual("footer.phonetitle")}
                  <span>{multilingual("footer.phone")}</span>
                </p>
                <p>
                  {multilingual("footer.emailtitle")}{" "}
                  <span>{multilingual("footer.email")}</span>
                </p>
                <p>
                  {multilingual("footer.opentitle")}{" "}
                  <span>{multilingual("footer.open")}</span>
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer__section -links">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">
                      {multilingual("footer.membercenter")}
                    </h5>
                    <ul>
                      {footerLinks.accountLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h5 className="footer-title">
                      {multilingual("footer.otherInfo")}
                    </h5>
                    <ul>
                      {footerLinks.informationLinks.map((link, index) => (
                        <li key={index}>
                          <Link href={link.to}>
                            <a>{link.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer__section -payment">
                <h5 className="footer-title">
                  {multilingual("footer.paymentway")}
                </h5>
                <p> </p>
                <div className="payment-methods">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/footer/payment.png"
                    }
                    alt="Payment methods"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-one__footer">
        <div className="container">
          <div className="footer-one__footer__wrapper">
            <p>© Copyright 2021 Bankpro</p>
            <ul>
              {footerLinks.creditLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.to}>
                    <a>{link.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
