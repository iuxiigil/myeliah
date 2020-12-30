import React from "react";
import Link from "next/link";
import Head from "next/head";
import Button from "../components/Control/Button";

export default function () {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <div className="error-404">
        <div className="container-full-half">
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="error-404__content">
                <h2>Oops!</h2>
                <h5>404 找不到網頁</h5>
                <p>
                  你要到訪的網頁不存在，請確認網址使否正確？或是重新回到首頁
                </p>
                <div className="form-wrapper">
                  <form>
                    {/* <input type="text" placeholder="Enter keyword" /> */}
                    <button className="btn -transparent">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                  <Button
                    action={process.env.PUBLIC_URL + "/homepages/homepage1"}
                    className="-underline"
                    color="transparent"
                    content="返回首頁"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
