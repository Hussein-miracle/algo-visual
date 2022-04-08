import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Algorithm Visualization</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <p className='mx-auto'>Hello</p>

        <Link href='/sorting/bubble'>Bubble Sort</Link>
      </div>
    </div>
  );
}