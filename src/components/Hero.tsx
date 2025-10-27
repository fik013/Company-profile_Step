import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with 3D Parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.2, rotateX: 5 }}
          animate={{ scale: 1, rotateX: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transformStyle: "preserve-3d"
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </motion.div>

      {/* Content dengan 3D Transform */}
      <motion.div 
        className="container mx-auto px-4 z-10 relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            style={{ transform: "translateZ(50px)" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Inovasi Teknologi Masa Depan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
          >
            Kami Membantu Mewujudkan{" "}
            <motion.span 
              className="bg-gradient-primary bg-clip-text text-transparent inline-block"
              animate={{ rotateY: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            >
              Inovasi Teknologi
            </motion.span>{" "}
            Masa Depan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{ transform: "translateZ(40px)" }}
          >
            Transformasi digital dimulai dari sini. Kami menyediakan solusi teknologi
            terdepan untuk membawa bisnis Anda ke level selanjutnya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ transform: "translateZ(50px)" }}
          >
            <motion.div whileHover={{ scale: 1.1, rotateY: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg group"
                onClick={scrollToContact}
              >
                Hubungi Kami
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotateY: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg"
                onClick={() => {
                  const element = document.getElementById("products");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
