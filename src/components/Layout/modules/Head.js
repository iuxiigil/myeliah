import React from "react";
import Head from "next/head";

const Meta = (props) => (
  <Head>
    <>
      <title>金財通 部落格</title>
      <title key="title">{props.myseo.title}</title>

      <link rel="shortcut icon" href="/static/favicon.png" />
      <link rel="icon" href="/static/favicon.png" sizes="32x32" />
      <link rel="icon" href="/static/favicon.png" sizes="192x192" />
      <link rel="apple-touch-icon-precomposed" href="/static/favicon.png" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        key={props.myseo.description}
        name="description"
        content={props.myseo.description}
      />
      <meta name="og:type" content={props.myseo.openGraph.type} />
      <meta name="og:title" content={props.myseo.openGraph.title} />
      <meta name="og:description" content={props.myseo.openGraph.description} />
      <meta name="og:url" content={props.myseo.openGraph.url} />
      <meta name="og:image" content={props.myseo.openGraph.image} />
      <meta name="keywords" content={props.myseo.keyword} />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        // href="/static/fonts/feather-font/css/iconfont.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        // href="/static/css/bootstrap.min.css"
      />
      {/* <link rel="stylesheet" type="text/css" href="/static/css/slick.min.css" /> */}
      <link
        rel="stylesheet"
        type="text/css"
        // href="/static/fonts/font-awesome/css/font-awesome.min.css"
      />
      <link rel="icon" href="/fav.png" />
      <link
        href="https://kit-pro.fontawesome.com/releases/v5.13.0/css/pro.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cambay:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </>
  </Head>
);

export default Meta;
