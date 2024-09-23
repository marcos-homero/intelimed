"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";

interface TemplateProps {
  children: React.ReactNode;
}

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template: React.FC<TemplateProps> = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        className="flex justify-center"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>
      {completion && (
        <span
          className="fixed bottom-0 right-0 top-0 z-50 w-2 bg-gradient-to-b from-primary to-[#6f3afa] transition-all duration-700"
          style={{ transform: `translateY(${completion - 100}%)` }}
        />
      )}
    </>
  );
};

export default Template;
