import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LiquiditySection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#F5F5FB] rounded-[24px] p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r bg-clip-text">
                Create Your Liquidity Pool
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    1. Connect Your Wallet
                  </h3>
                  <p className="text-muted-foreground">
                    Connect your preferred Web3 wallet to get started with
                    liquidity provision.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">
                    2. Choose Token Pair
                  </h3>
                  <p className="text-muted-foreground">
                    Select the tokens you want to provide liquidity for from our
                    supported list.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">3. Set Amount</h3>
                  <p className="text-muted-foreground">
                    Specify the amount of tokens you want to deposit into the
                    liquidity pool.
                  </p>
                </div>
              </div>
              <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-[#00C283] to-[#3C76FF] hover:opacity-90"
              >
                Launch Pool
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#3C76FF] rounded-[24px] p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Place Widget on Your Site
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">1. Get the Code</h3>
                  <p className="text-white/90">
                    Copy our widget code snippet from the developer dashboard.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">2. Customize</h3>
                  <p className="text-white/90">
                    Adjust the widget parameters to match your site's design and
                    requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">3. Implement</h3>
                  <p className="text-white/90">
                    Add the widget code to your website's HTML where you want it
                    to appear.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-white text-[#3C76FF] hover:bg-white/90"
                >
                  Get Widget Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
