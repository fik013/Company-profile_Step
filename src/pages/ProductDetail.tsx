import { motion, useScroll, useTransform } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const products = [
    {
      id: "1",
      title: "Cloud Solutions",
      description:
        "Infrastruktur cloud yang scalable dan aman untuk kebutuhan bisnis modern Anda dengan performa tinggi dan reliability maksimal.",
      image: product1,
      features: ["99.9% Uptime", "Auto Scaling", "24/7 Support"],
      longDescription:
        "Solusi cloud kami dirancang untuk memberikan kinerja optimal dengan arsitektur yang dapat diskalakan sesuai kebutuhan bisnis Anda. Dengan teknologi terkini dan infrastruktur global, kami memastikan aplikasi Anda selalu online dan responsif.",
      benefits: [
        "Infrastruktur global dengan latency rendah",
        "Auto-scaling otomatis berdasarkan traffic",
        "Backup otomatis dan disaster recovery",
        "Monitoring real-time 24/7",
        "Tim support teknis berpengalaman",
        "Sertifikasi keamanan internasional"
      ],
      pricing: "Mulai dari Rp 5.000.000/bulan",
    },
    {
      id: "2",
      title: "AI & Machine Learning",
      description:
        "Solusi kecerdasan buatan dan machine learning untuk mengotomasi proses bisnis dan meningkatkan decision making.",
      image: product2,
      features: ["Predictive Analytics", "Natural Language", "Computer Vision"],
      longDescription:
        "Platform AI kami mengintegrasikan teknologi machine learning terbaru untuk membantu bisnis Anda membuat keputusan yang lebih cerdas. Dari analisis prediktif hingga pemrosesan bahasa alami, kami menyediakan solusi end-to-end.",
      benefits: [
        "Model AI custom sesuai kebutuhan bisnis",
        "Integrasi mudah dengan sistem existing",
        "Training dan fine-tuning berkelanjutan",
        "Dashboard analytics yang intuitif",
        "API documentation lengkap",
        "Konsultasi strategi AI implementation"
      ],
      pricing: "Mulai dari Rp 10.000.000/bulan",
    },
    {
      id: "3",
      title: "Mobile Development",
      description:
        "Aplikasi mobile native dan cross-platform dengan user experience terbaik dan performa optimal di semua device.",
      image: product3,
      features: ["iOS & Android", "React Native", "Modern UI/UX"],
      longDescription:
        "Kami mengembangkan aplikasi mobile yang tidak hanya indah secara visual, tetapi juga memberikan performa optimal dan user experience yang luar biasa. Dengan teknologi React Native, aplikasi Anda dapat berjalan di iOS dan Android dengan satu codebase.",
      benefits: [
        "Design UI/UX yang modern dan intuitif",
        "Performance optimization untuk semua device",
        "Push notification dan offline mode",
        "App store submission assistance",
        "Maintenance dan update berkala",
        "Analytics dan crash reporting"
      ],
      pricing: "Mulai dari Rp 15.000.000/project",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section dengan 3D Parallax */}
      <motion.section
        className="relative h-[60vh] overflow-hidden"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ scale: 1.2, rotateY: 5 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </motion.div>

        {/* Back Button dengan Hover 3D */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-24 left-4 md:left-8 z-20"
        >
          <motion.div
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              onClick={() => navigate("/")}
              className="bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Kembali
            </Button>
          </motion.div>
        </motion.div>

        {/* Title dengan 3D Transform */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                whileHover={{ scale: 1.05, rotateY: 5 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Premium Solution</span>
              </motion.div>
              
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ transform: "translateZ(50px)" }}
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {product.title}
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                style={{ transform: "translateZ(30px)" }}
              >
                {product.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content dengan Card 3D */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Features Cards dengan Hover 3D */}
              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
                whileHover={{ 
                  rotateY: 2, 
                  rotateX: -2,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(66, 153, 225, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <h2 className="text-3xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {product.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  {product.features.map((feature, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      whileHover={{ scale: 1.1, rotateZ: 5 }}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20 font-medium"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Benefits dengan Stagger Animation */}
              <motion.div
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border"
                whileHover={{ 
                  rotateY: -2, 
                  rotateX: 2,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(159, 122, 234, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">Key Benefits</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.1 }}
                      whileHover={{ x: 10, scale: 1.05 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar dengan Floating Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="lg:col-span-1"
            >
              <motion.div
                className="sticky top-24 space-y-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                {/* Pricing Card dengan 3D Hover */}
                <motion.div
                  className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground"
                  whileHover={{ 
                    rotateY: 5,
                    scale: 1.05,
                    boxShadow: "0 30px 60px rgba(66, 153, 225, 0.5)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Pricing</h3>
                  </div>
                  <div className="text-3xl font-bold mb-2">{product.pricing}</div>
                  <p className="opacity-90 mb-6">
                    Harga dapat disesuaikan dengan kebutuhan dan skala bisnis Anda
                  </p>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="w-full bg-background text-primary hover:bg-background/90"
                      onClick={() => {
                        const element = document.getElementById("contact");
                        if (element) {
                          navigate("/");
                          setTimeout(() => {
                            element.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                    >
                      Dapatkan Konsultasi Gratis
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Contact Card dengan Pulse Animation */}
                <motion.div
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border"
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: 2,
                    boxShadow: "0 20px 40px rgba(66, 153, 225, 0.3)"
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <h3 className="text-xl font-bold mb-3">Butuh Bantuan?</h3>
                  <p className="text-muted-foreground mb-4">
                    Tim kami siap membantu Anda memilih solusi terbaik untuk bisnis Anda
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      className="w-full border-primary/30 hover:bg-primary/10"
                    >
                      Hubungi Sales
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
