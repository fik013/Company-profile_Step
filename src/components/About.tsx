import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: "Visi Kami",
      description: "Menjadi pemimpin dalam inovasi teknologi yang mengubah cara dunia bekerja",
    },
    {
      icon: Lightbulb,
      title: "Misi Kami",
      description: "Memberikan solusi teknologi terdepan yang efisien dan berkelanjutan",
    },
    {
      icon: Users,
      title: "Tim Ahli",
      description: "Didukung oleh profesional berpengalaman di bidang teknologi",
    },
    {
      icon: TrendingUp,
      title: "Pertumbuhan",
      description: "Berkembang bersama klien dengan hasil yang terukur dan nyata",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang <span className="bg-gradient-primary bg-clip-text text-transparent">TechNova</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechNova adalah perusahaan teknologi yang berdedikasi untuk menciptakan solusi inovatif
            yang membantu bisnis berkembang di era digital. Dengan pengalaman lebih dari 10 tahun,
            kami telah membantu ratusan klien mencapai transformasi digital mereka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-50, 50], [10, -10]);
            const rotateY = useTransform(x, [-50, 50], [-10, 10]);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  z: 50
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  x.set((e.clientX - centerX) / 10);
                  y.set((e.clientY - centerY) / 10);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ 
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
                className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4"
                  style={{ transform: "translateZ(30px)" }}
                  whileHover={{ scale: 1.2, rotateZ: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  style={{ transform: "translateZ(15px)" }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Kepuasan Klien</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;