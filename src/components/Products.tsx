import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import CardSwap, { Card } from "./ui/CardSwap";
import RotatingText from "./ui/RotatingText";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const products = [
    {
      id: "1",
      title: "Cloud Solutions",
      description:
        "Infrastruktur cloud yang scalable dan aman untuk kebutuhan bisnis modern Anda dengan performa tinggi dan reliability maksimal.",
      image: product1,
      features: ["99.9% Uptime", "Auto Scaling", "24/7 Support"],
    },
    {
      id: "2",
      title: "AI & Machine Learning",
      description:
        "Solusi kecerdasan buatan dan machine learning untuk mengotomasi proses bisnis dan meningkatkan decision making.",
      image: product2,
      features: ["Predictive Analytics", "Natural Language", "Computer Vision"],
    },
    {
      id: "3",
      title: "Mobile Development",
      description:
        "Aplikasi mobile native dan cross-platform dengan user experience terbaik dan performa optimal di semua device.",
      image: product3,
      features: ["iOS & Android", "React Native", "Modern UI/UX"],
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Produk & <span className="bg-gradient-primary bg-clip-text text-transparent">Layanan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan berbagai solusi teknologi yang disesuaikan dengan kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h3 className="text-3xl font-bold mb-4">Jelajahi Solusi Inovatif Kami</h3>
            <p className="text-muted-foreground">
              Setiap kartu mewakili komitmen kami untuk memberikan keunggulan. Geser untuk melihat bagaimana kami dapat membantu Anda mencapai tujuan Anda.
            </p>
            <div className="flex items-center mt-8">
              <h4 className="text-xl font-semibold mr-4">Kami melayani:</h4>
              <RotatingText
                texts={[
                  "pembuatan website",
                  "aplikasi",
                  "mobile",
                  "desktop",
                  "debug",
                  "perbaikan erorr",
                  "penambahan fitur",
                  "dan lainnya",
                ]}
                mainClassName="bg-gradient-to-r from-primary to-secondary text-white text-2xl font-bold px-4 py-2 rounded-lg"
                elementLevelClassName="text-white"
              />
            </div>
          </div>
          <div style={{ height: '600px', position: 'relative', width: '50%' }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {products.map((product, index) => (
                <Card key={index}>
                  <motion.div 
                    className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                        style={{ transform: "translateZ(20px)" }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent"
                        style={{ transform: "translateZ(25px)" }}
                      />
                    </div>

                    {/* Content */}
                    <motion.div 
                      className="p-6 flex-1 flex flex-col"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, rotateZ: 5 }}
                            className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.button 
                        className="flex items-center text-primary group-hover:gap-2 transition-all"
                        whileHover={{ x: 5 }}
                        style={{ transform: "translateZ(40px)" }}
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Pelajari Lebih Lanjut
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;