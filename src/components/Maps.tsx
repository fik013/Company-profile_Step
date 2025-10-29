import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Maps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lokasi <span className="bg-gradient-primary bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Kunjungi kantor kami atau hubungi untuk meeting virtual
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden border border-border shadow-xl max-w-5xl mx-auto"
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94551.38470812168!2d107.72394175204226!3d-6.55621156975977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693c919ece3ed5%3A0x630f121657291f0!2sSubang%2C%20Kec.%20Subang%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1761711502769!5m2!1sid!2sid"   
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="StepByDev Location"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Maps;