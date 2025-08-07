import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const skills = [
    "JavaScript", "C++", "C", "React", "Node.js", "Express.js",
    "HTML", "CSS", "Bootstrap", "EJS", "Git", "GitHub", "DSA", "OOPs", "RESTful APIs",
    "MongoDB", "SQL", "Linux"
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div style={{ y }} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-muted-foreground">About</span>{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
          </motion.div>

          <TextReveal
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            delay={0.2}
          >
            I'm a passionate Computer Engineering student at OUTR - Bhubaneswar with a strong foundation in web development, data structures, and algorithms. I thrive in the fast-paced tech world, building smart solutions and tackling challenging problems with modern technologies.
          </TextReveal>

          <TextReveal
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            delay={0.4}
          >
            Enthusiastic about AI and web development, I enjoy coding competitions, outdoor activities, and continuous learning through projects. Completed schooling from DPS Rourkela in 2024 with strong academic and technical leadership background.
          </TextReveal>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium border border-border hover:border-primary transition-colors duration-300"
                  data-cursor-hover
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-80 h-96 bg-gradient-primary rounded-2xl shadow-accent overflow-hidden">
              <img 
                src="/lovable-uploads/25eb3ad6-0a38-4c28-8dc4-3fb978240d0d.png" 
                alt="Misbah Ur Rahman" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full animate-float"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full animate-glow-pulse"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;