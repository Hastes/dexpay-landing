import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="py-16 lg:my-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center"> {/* Changed: grid */}
          <motion.div
            className="lg:col-span-4 relative h-full lg:order-1 order-2" // Added: lg:order-1 order-2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F5F5FB] h-full rounded-[24px] p-8 md:p-12">
              <img
                src="/attached_assets/dexpay_mock_s2.png"
                alt="DexPay Mobile App Interface"
                className="w-full lg:absolute bottom-0 scale-110 left-0 max-h-[500px] object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-8 lg:pl-8 lg:order-2 order-1" // Added: lg:order-2 order-1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#3C76FF] rounded-[24px] p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                We make
                <br />
                digital payments
                <br />
                seamless for you
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                Experience lightning-fast transactions, enhanced security, and global reach with our advanced crypto payment solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#3C76FF] hover:bg-white/90"
                >
                  Get Started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-[#FFFFFF33] border-white text-white hover:bg-white/30"
                >
                  Explore our services
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
