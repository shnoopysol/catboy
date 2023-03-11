import "@/styles/globals.css";
import Head from "next/head";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], variable: "--font-merienda" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${merienda.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
