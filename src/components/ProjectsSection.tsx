import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution built with React, Node.js, and PostgreSQL. Features real-time inventory management and advanced analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Dashboard",
      description: "Intelligent analytics dashboard with machine learning insights. Built with Python, TensorFlow, and React for seamless data visualization.",
      tech: ["Python", "TensorFlow", "React", "D3.js"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Creative Portfolio",
      description: "Award-winning portfolio website with advanced animations and WebGL effects. Showcasing the perfect blend of art and technology.",
      tech: ["Three.js", "GSAP", "WebGL", "Blender"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-muted-foreground">Featured</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <TextReveal
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            delay={0.2}
          >
            A selection of my recent work showcasing different aspects of modern web development
          </TextReveal>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const projectRef = useRef<HTMLDivElement>(null);
            const { scrollYProgress: projectProgress } = useScroll({
              target: projectRef,
              offset: ["start end", "end start"]
            });

            const x = useTransform(
              projectProgress,
              [0, 0.3, 0.7, 1],
              isEven ? [-100, 0, 0, 100] : [100, 0, 0, -100]
            );

            const scale = useTransform(projectProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

            return (
              <motion.div
                key={project.title}
                ref={projectRef}
                style={{ x, scale }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                <motion.div
                  className={`space-y-6 ${isEven ? "" : "lg:col-start-2"}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <motion.span
                      className="text-sm font-mono text-primary"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      0{index + 1}
                    </motion.span>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <TextReveal
                    className="text-lg text-muted-foreground leading-relaxed"
                    delay={0.1}
                  >
                    {project.description}
                  </TextReveal>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 + techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex gap-4 pt-4"
                  >
                    <motion.button
                      className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium link-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      Live Demo
                    </motion.button>
                    <motion.button
                      className="px-6 py-3 border border-primary text-primary rounded-lg font-medium link-hover"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-cursor-hover
                    >
                      View Code
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`relative ${isEven ? "" : "lg:col-start-1"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className={`aspect-video rounded-2xl bg-gradient-to-r ${project.color} p-1 shadow-accent`}>
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <motion.div
                        className="text-6xl opacity-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        💻
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full animate-glow-pulse"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;