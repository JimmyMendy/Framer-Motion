import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { riseWithFade, videoAnimation, FadeIn, wordAnimation, staggerChildren } from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className='min-h-screen px-12 bg-cream'
      initial='initial'
      animate='animate'
    >
      <Head>
        <title>Home | Robot Co</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='grid grid-cols-[3fr_1fr] py-12'>
        <h1 className='text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]'>
          <AnimatedWords title="Helper robots for a better everyday" />
        </h1>
        <motion.div
          className='text-base leading-[150%] self-end'
          variants={FadeIn}
        >
          Born frm moonshot factory. we're building a new type of robot. One
          that can learn by itself, to help almost anything.
        </motion.div>
      </main>
      <motion.video loop autoPlay muted playsInline variants={videoAnimation}>
        <source src='../assets/hero-video.mp4' type='video/mp4' />
      </motion.video>
      <Footer />
    </motion.div>
  );
};

type AnimatedWordsProps = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, index) => (
        <div key={index} className="inline-block overflow-hidden">
          <motion.span className="inline-block overflow-hidden" variants={wordAnimation}>{word + "\u00A0"}</motion.span>
        </div>
      ))}
    </motion.span>
  )
};

export default Home;
