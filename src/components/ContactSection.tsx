import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const contactMethods = [
    { label: "Email", value: "misbahstudies123@gmail.com", icon: "📧", link: "mailto:misbahstudies123@gmail.com" },
    { label: "LinkedIn", value: "Misbah Ur Rahman", icon: "💼", link: "https://www.linkedin.com/in/misbah-ur-rahman-43b4b0341/" },
    { label: "GitHub", value: "@pinkkman", icon: "🐙", link: "https://github.com/pinkkman" }
  ];

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
      style={{ y }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-muted-foreground">Let's</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <TextReveal
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            delay={0.2}
          >
            Have a project in mind? Let's bring your vision to life. 
            I'm always excited to work on new challenges and creative collaborations.
          </TextReveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.button
            className="px-12 py-6 bg-gradient-primary text-primary-foreground rounded-2xl font-bold text-xl relative overflow-hidden group shadow-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <span className="relative z-10">Start a Project</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300 link-hover"
                  whileHover={{ y: -5 }}
                  data-cursor-hover
                >
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{method.label}</h3>
                  <p className="text-sm text-muted-foreground">{method.value}</p>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2025 Portfolio by Pinkman
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;