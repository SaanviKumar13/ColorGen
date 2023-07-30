import Head from "next/head";
import ColorGenerator from "@/components/ColorGenerator";
import { motion } from "framer-motion";
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
        <ColorGenerator />
        <div className="">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="absolute text-right top-72 right-[15%] font-title text-5xl mt-12 md:text-7xl"
          >
            Color
            <br className="md:hidden" /> Generator
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="absolute top-80 mt-32 right-[12%] mr-4 md:mt-28 md:mr-14 font-body text-xl"
          >
            A smarter way to find colors
          </motion.p>
        </div>
      </main>
    </>
  );
}
