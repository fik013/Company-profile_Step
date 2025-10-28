import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import LiquidEther from "@/components/ui/liquid-ether";
import ShinyText from "@/components/ui/ShinyText";


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
    // add perspective container to enable 3D transforms
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ perspective: 1400 }}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
  
      {/* Content dengan 3D Transform */}
      <motion.div
        className="container mx-auto px-4 z-10 relative pointer-events-none"
        style={{ transformStyle: "preserve-3d", perspective: 1400 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.03, rotateY: 6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            style={{ transform: "translateZ(60px)" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <ShinyText text="Inovasi Teknologi Masa Depan" />
          </motion.div>
 
          <motion.h1
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ transform: "translateZ(90px)", transformStyle: "preserve-3d" }}
          >
            Kami Membantu Mewujudkan{" "}
            <motion.span 
              className="bg-gradient-primary bg-clip-text text-transparent inline-block"
              animate={{ rotateY: [0, 6, 0] }}
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
            style={{ transform: "translateZ(70px)" }}
          >
            Transformasi digital dimulai dari sini. Kami menyediakan solusi teknologi
            terdepan untuk membawa bisnis Anda ke level selanjutnya.
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
            style={{ transform: "translateZ(80px)" }}
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
  
      {/* Animated Elements (call-to-action hint) */}
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