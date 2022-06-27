import { useRef, useEffect } from "react";
import type { FC, ReactElement } from "react";
import { NextPage } from "next";
import { AnimatePresence, motion, animate } from "framer-motion";

interface Props {
  visible?: boolean | any;
}

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

const Counter: FC<CounterProps> = ({ from, to, duration }): ReactElement => {
  const ref = useRef<null | HTMLElement | any>();
  useEffect(() => {
    const controls = animate(from, to, {
      duration: duration,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(0) + "%";
      },
    });

    return () => controls.stop();
  }, [from, to, duration]);

  return <p className="tracking-normal" ref={ref} />;
};

const SplashScreen: FC<Props> = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          animate={{ y: 0 }}
          exit={{ y: "100vh", opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 bg-[#131313] flex flex-col items-end justify-start lg:items-start lg:justify-end h-screen w-screen z-[999]"
        >
          <>
            <motion.div
              initial={{ opacity: 0, y: 75, rotate: "-90deg" }}
              animate={{ opacity: 1, y: 0, rotate: "0deg" }}
              transition={{
                ease: [0.4, -0.04, -0.01, 0.7],
                duration: 0.65,
                delay: 0.55,
              }}
              className="text-[6rem] lg:text-[13rem] text-neutral-700 mx-2 lg:mx-12 overflow-hidden"
            >
              <Counter from={0} to={100} duration={3} />
            </motion.div>
          </>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

SplashScreen.defaultProps = {
  visible: true,
};

export default SplashScreen;
