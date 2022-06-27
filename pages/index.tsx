/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import Clock from "react-live-clock";
import Meta from "@/defaults/Meta";

import SplashScreen from "@/components/SplashScreen";
import Tab from "@/components/Tab";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  const [SplashVisible, setSplashVisible] = useState<boolean>(true);
  const [CurrentTab, setCurrentTab] = useState<number>(1);
  const [ImageVisibility, setImageVisibility] = useState<boolean>(false);
  const [Timezone, setTimezone] = useState<string>("");
  const MainRef = useRef<null | HTMLElement | any>();
  const target = useRef<null | HTMLElement | any>();

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3500);

    const offset = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(offset);

    // return () => scroll.destroy();
  }, []);

  return (
    <>
      <Meta title="Ayodeji" />
      <SplashScreen visible={SplashVisible} />
      <nav className="w-screen bg-[#131313] flex justify-between items-center fixed top-0 z-[99] py-[13px] px-4 lg:px-[10vw]">
        <h1 className="text-3xl text-neutral-600 lg:underline lg:underline-offset-4">
          AYODEJI
        </h1>

        <div className="flex flex-col lg:flex-row items-end lg:items-center gap-x-2">
          <Clock
            format={"HH:mm:ss"}
            ticking={true}
            timezone={Timezone || "Europe/London"}
            className="text-xl lg:text-3xl text-neutral-700 underline lg:no-underline underline-offset-4 Clock"
          />
          <h1 className="text-xs lg:text-sm text-neutral-700 mt-[2px] lg:mt-0">
            {Timezone}
          </h1>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main
        className="w-[91%] lg:w-3/5 2xl:w-3/6 mx-auto mt-[11vh] lg:mt-[12vh]"
        ref={MainRef}
      >
        {/* <div
          onMouseEnter={() => setImageVisibility(true)}
          onMouseLeave={() => setImageVisibility(false)}
        >
          <AnimatePresence exitBeforeEnter>
            {!ImageVisibility ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative w-[35vw] lg:w-[14vw] 2xl:w-[10vw] mx-auto aspect-square overflow-hidden rounded-full border-[3px] border-neutral-800 hover:border-neutral-300 hover:-translate-y-2 transition-all cursor-pointer select-none"
              >
                <Image
                  src="/images/Memoji.PNG"
                  className="select-none"
                  alt="Memoji"
                  layout="fill"
                  loading="eager"
                />
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="relative w-[35vw] lg:w-[14vw] 2xl:w-[10vw] mx-auto aspect-square overflow-hidden rounded-full border-[3px] border-neutral-800 hover:border-neutral-300 hover:-translate-y-2 transition-all cursor-pointer select-none"
              >
                <Image
                  src="/images/ME.jpg"
                  className="select-none"
                  alt="Me"
                  layout="fill"
                  loading="eager"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-10 mb-8">
          <AnimatePresence>
            {!SplashVisible && (
              <div className="h-full">
                <motion.div
                  initial={{ opacity: 0, y: -300 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="tracking-widest p-2"
                >
                  In a very real sense, we are all aliens on a strange planet.
                  We spend most of our lives reaching out and trying to
                  communicate. If during our whole lifetime, we could reach out
                  and really communicate with just two people, we are indeed
                  very fortunate
                  <p className="text-right mt-2">-Gene Roddenberry</p>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.2 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0,
                    ease: [1, 0.7, 0.7, 1],
                  }}
                  className="relative block w-full h-max aspect-square mx-auto overflow-hidden transition-all ease-in-out mt-[1.2rem] mb-[2rem] lg:my-[3rem] select-none Home-Image-Container"
                >
                  <div className="Home-Overlay" />
                  <img
                    src="/images/ME.png"
                    alt="ME"
                    className="Home-Image"
                    loading="eager"
                  />
                </motion.div>
              </div>
            )}
          </AnimatePresence>
          <section className="relative w-[95%] h-min mx-auto select-none">
            <div
              className={`absolute bottom-0 -left-[6px] aspect-square rounded-none w-3  ${
                CurrentTab === 5 ? "bg-neutral-300" : "bg-neutral-700"
              }`}
            ></div>
            <Tab
              identifier={1}
              title="About"
              CurrentTab={CurrentTab}
              setCurrentTab={setCurrentTab}
            >
              An inquisitive human interested in tech, space, Greek or Norse
              mythology, the supernatural and a couple of other weird things...
              but who am I to decide what&apos;s weird?
              <br />
              More? Okay... I am a <b>speed-obsessed</b> software developer
              (back-end, with a sliver of front-end knowledge here and there)
              constantly learning to attain &quot;senior-level&apos; skills
              whatever you think that is. If you are a fan of AJR (the band),
              Star Wars or Star Trek, you are 90% my kind of person, just
              kidding but are you?
            </Tab>
            <Tab
              identifier={2}
              title="Presence"
              CurrentTab={CurrentTab}
              setCurrentTab={setCurrentTab}
            >
              &quot;Presence&quot; is probably not what you would call this
              but... I&apos;m often at Breege HQ joking around with the team,
              making sure we are still on schedule and writing codes or at
              anywhere else I work; being super serious as an employee... and
              when I&apos;m not doing these, I&apos;m probably learning
              something new, or old. I could also be on Twitter posting random
              things... or somewhere else, who cares?
            </Tab>
            <Tab
              identifier={3}
              title="Portfolio"
              CurrentTab={CurrentTab}
              setCurrentTab={setCurrentTab}
            >
              Tsk... I am not making one yet until Frikax goes live - when it
              is, you will find the link here.{" "}
              <a
                href="https://www.frikax.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-neutral-500"
              >
                What is Frikax?
              </a>
            </Tab>
            <Tab
              identifier={4}
              title="Blog"
              CurrentTab={CurrentTab}
              setCurrentTab={setCurrentTab}
            >
              Indulge yourself in my thoughts on an array of topics that are
              floating around in my head, if you get what I mean.
              <div className="Link text-neutral-300 hover:text-neutral-500">
                <Link href="/blog">Start reading</Link>
              </div>
            </Tab>
            <Tab
              identifier={5}
              title="Other Stuff"
              CurrentTab={CurrentTab}
              setCurrentTab={setCurrentTab}
            >
              Uhm... stuffs I worked on (or I am working on) that you might be
              interested in? - I like a minimal Twitter bio 😄
              <ul>
                <li className="list-disc py-2">
                  <a
                    href="https://www.frikax.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frikax - The all-in-one social media for Techies
                  </a>
                </li>
                <li className="list-disc py-2">
                  <a
                    href="https://www.noxis.chat"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Noxis - Quick, easy & anonymous conversations
                  </a>
                </li>
                <li className="list-disc py-2">
                  <a
                    href="https://www.hitlist.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HitList CLI - Run multiple terminal commands with one hit!
                  </a>
                </li>
                <li className="list-disc py-2">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    [REDACTED] - Effortless and Modern Collaborations in a Snap
                  </a>
                </li>
              </ul>
            </Tab>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
