import Head from "next/head";
import Search from "@/components/search";

export default function Home() {
  return (
    <>
      <Head>
        <title>ColorGen</title>
        <meta name="description" content="AI Color Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className={"bg-white min-h-screen "}>
        <div className="m-5">
          <h1 className="font-title text-7xl md:text-8xl">
           Color Generator
          </h1>
          <p className="font-body mt-3 text-xl ml-3">
            A smarter way to find colors
          </p>
        </div>
        <Search />
      </main>
    </>
  );
}