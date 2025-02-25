import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 lg:my-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <div className="bg-[#F5F5FB] rounded-[24px] p-8 md:p-16">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <motion.div 
              className="lg:col-span-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold text-primary mb-4 tracking-wider">
                ACCEPT CRYPTO PAYMENTS
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                DexPay Crypto
                <br />
                Payment Gateway
              </h1>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#00C283] to-[#3C76FF] hover:opacity-90"
              >
                Get Started
              </Button>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 relative h-full flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="dexpay-landing/attached_assets/dexpay_mock_s1.png"
                alt="DexPay Mobile App Interface"
                className="lg:absolute max-w-[300px] bottom-0 -mb-8 lg:-mb-16"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}