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
        <div className="m-5">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            className="font-title text-7xl md:text-8xl"
          >
            Color Generator
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
            className="font-body mt-3 text-xl ml-3"
          >
            A smarter way to find colors
          </motion.p>
        </div>
        <ColorGenerator />
      </main>
    </>
  );
}
