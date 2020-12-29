import Head from "next/head";
import Link from "next/link";
import Homepage1 from "./homepages/homepage1";

export default function Home() {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <Homepage1 />
    </>
  );
}
