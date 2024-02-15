// import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Form from "./components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-5 md:p-24 ${inter.className}`}
      >
        <Form />
      </main>
    </>
  );
}
