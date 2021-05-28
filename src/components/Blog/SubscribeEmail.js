import SubscribeEmail from "../Other/SubcribeEmail";
export const SubscribeEmailCom = () => {
  return (
    <div className="blog-sidebar__section -newsletter">
      <h5 className="blog-sidebar__title">訂閱</h5>
      <p>訂閱我們並在您將可以收到我們的最新消息.</p>
      <SubscribeEmail
        mailchimpUrl="https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e"
        placeholder="輸入你的 email"
        btnContent="訂閱"
        className="blog-sidebar-newsletter"
      >
        <label htmlFor="agree">
          <input type="checkbox" name="agree" id="agree" />
          我同意 條款及細則
        </label>
      </SubscribeEmail>
    </div>
  );
};
