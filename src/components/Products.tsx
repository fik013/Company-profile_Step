import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const CardWrapper = ({ children }: { children: React.ReactNode }) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
              
              const rotateX = useTransform(y, [-100, 100], [10, -10]);
              const rotateY = useTransform(x, [-100, 100], [-10, 10]);
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: -5,
                    z: 50
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    x.set(e.clientX - centerX);
                    y.set(e.clientY - centerY);
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
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {children}
                </motion.div>
              );
            };

            return (
              <CardWrapper key={index}>
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
                    >
                      Pelajari Lebih Lanjut
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
