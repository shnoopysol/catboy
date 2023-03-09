import HomeViewController from "./HomeViewController.js";
import Head from "next/head.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Catboy - Home Page</title>
      </Head>
      <div>
        <HomeViewController />
      </div>
    </>
  );
}
