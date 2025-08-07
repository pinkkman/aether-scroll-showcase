import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none">
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              SOFTWARE
            </span>
            <span className="block text-foreground glitch" data-text="DEVELOPER">
              DEVELOPER
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <TextReveal
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            delay={0.1}
          >
            Engineering brain meets frontend finesse — coding clean, cracking logic, and crafting impact
          </TextReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold text-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </motion.button>

          <motion.button
            className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold text-lg link-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;