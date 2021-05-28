import Link from "next/link";
import { useForm } from "react-hook-form";
import Lightbox from "react-image-lightbox";

import { convertToSlug } from "../../common/utils";
import SocialIcons from "../Other/SocialIcons";
import Button from "../Control/Button";
import ImageLightbox from "../Control/ImageLightbox";

export default function PostContent({ data, children }) {
  const addspan = (str) => {
    let startspan = str.includes("*");
    if (startspan) str = "<span>" + str;
    emdspan = str.includes("^");
    if (emdspan) str = str + "</span>";

    return str;
  };
  const { register, handleSubmit, errors } = useForm();
  const onSearchSubmit = (data) => console.log(data);
  return (
    <div className="post-content">
      <div className="post-content__header">
        <div className="post-content__header__date">
          <h5>05</h5>
          <p>Feb</p>
        </div>
        <div className="post-content__header__content">
          <div className="post_content__info">
            <p>
              by <span>{data.author}</span>
            </p>
            <Link
              href={process.env.PUBLIC_URL + "#"}
              as={process.env.PUBLIC_URL + "#"}
            >
              <a>{data.category}</a>
            </Link>
          </div>
          <h2>{data.title}</h2>
        </div>
      </div>
      <div className="post-content__body">
        <p className="post-paragraph">
          <span>每隔一陣子</span>
          ，就有和美麗及青春相關的新「明星素材」出現，望著架上的瓶瓶罐罐，是否也讓妳感到無所適從？想要吃出青春美麗，究竟要花多少銀子、吞下多少營養素才夠？葡萄王最新推出的《超越奇蹟
          鹿胎盤馥活膠囊》匯集了13種精粹精華，啟動5重青春馥活關鍵，一天兩顆，循序漸進地從體力、美麗，打造完美體質。
        </p>
        <p className="post-paragraph">
          <span>藍光是什麼？</span>
          它不只造成眼睛傷害，皮膚也可能老化、長斑，
          光分為可見光和不可見光，不可見光是常聽到的UVA、UVB，而藍光是可見光，波長大約是400至450nm，「這段波長就是彩虹中的靛色跟紫色，」美之道皮膚科診所院長邱品齊指出，這段波長在紫外線的隔壁，雖然強度較弱但有人認為可能跟紫外線一樣，
          <span>對人體皮膚有害</span>
          ，「UVA傷害真皮層，藍光則是傷害更深入的皮下組織。」
        </p>
        <p className="post-paragraph">
          <span>藍光有什麼壞處？ </span>
          但是藍光也並非一無是處。藍光能增強注意力、加速神經系統的反應時間、維持好心情，若有睡眠問題，也可以透過調整藍光的暴露來改善；在皮膚治療上，藍光可以用來抗發炎、治療青春痘，「跟治療乾癬的照光治療一樣。照光治療是紫外光，藍光則用來治療青春痘，端看他的暴露量和時間，」曾德朋說
        </p>
        <ImageLightbox
          className="post-image"
          alt="post image"
          imgSrc={"/assets/images/blog/post_img.png"}
        />
        <p className="post-paragraph">
          <span>疼愛自己 </span>要適時放鬆
          在和自己一起的歲月裡，我們累積了學識、培養了氣質，是不是也該分自己的外在一點憐惜和疼愛？理想的外型不只反映了我們的健康，也讓我們更自信和快樂。足夠了解自己的我們，現在已經知道如何揚長避短、知道如何畫龍點睛，也越來越懂得怎麼疼愛自己。
        </p>
        <p className="post-paragraph">
          <span>每日愉快心情 </span>
          然而，每天自己對鏡子塗塗抹抹，那可多無趣呀。還記得電影《金法尤物》嗎？女主角艾兒在法學院課程上受了委屈，一個箭步衝進了美甲店，一邊做指甲一邊和美甲師傾吐心事。療程結束，指甲美美的、心情也美美的。
        </p>
        <div className="post-quote">
          <h5> 打造美，是日常生活的庇護所</h5>
          <div className="post-quote__author">
            <i className="fas fa-quote-left"></i>
            <p>美是一門專業，需要專業的鍛鍊</p>
          </div>
        </div>
        <p className="post-paragraph">
          <span>不要讓自己太累 </span>
          妳有時也會這樣，早上叫小孩起床怎麼也叫不起來、到公司不巧得與不好溝通的同事合作，晚上回了家，先生卻也遇到鬱悶挫折的一天，整個晚上都不說話。
        </p>
      </div>
      <div className="post-content__footer">
        <div className="post-content__footer__tags">
          <span>標籤:</span>
          {data.tags &&
            data.tags.map((tag, index) => (
              <Button key={index} action="#" color="light" content={tag} />
            ))}
        </div>
        <div className="post-content__footer__share">
          <span>分享:</span>
          <SocialIcons colored />
        </div>
      </div>
      <div className="post-content__actions">
        <div className="post-content__actions__change">
          <Link href="#">
            <a className="change-post-btn -prev">
              <i className="fas fa-angle-left"></i>上一篇
            </a>
          </Link>
          <Link href="#">
            <a className="change-post-btn -next">
              下一篇
              <i className="fas fa-angle-right"></i>
            </a>
          </Link>
        </div>
        <div className="post-content__actions__comment">
          <form onSubmit={handleSubmit(onSearchSubmit)}>
            <h5>評論</h5>
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="name"
                    placeholder="姓名"
                    ref={register({ required: true })}
                  />
                  {errors.name && (
                    <span className="input-error">Pleave provide a name</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    ref={register({ required: true })}
                  />
                  {errors.email && (
                    <span className="input-error">Pleave provide an email</span>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-validator">
                  <input
                    type="text"
                    name="website"
                    placeholder="網址"
                    ref={register({ required: true })}
                  />
                  {errors.website && (
                    <span className="input-error">
                      Pleave provide a website
                    </span>
                  )}
                </div>
              </div>
              <div className="col-12">
                <div className="input-validator">
                  <textarea
                    name="comment"
                    placeholder="評論"
                    rows="5"
                    ref={register({ required: true })}
                  />
                  {errors.comment && (
                    <span className="input-error">
                      Pleave leave us a comment
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button className="btn -red">Submit comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
