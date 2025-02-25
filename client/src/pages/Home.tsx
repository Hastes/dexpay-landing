import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <iframe
            src="https://p2p.dextrade.com/swap-view?fromNetworkName=bitcoin&fromTicker=BTC&toNetworkName=ethereum&toTicker=USDT&name=AN+DexPay"
            width="100%"
            height="600px" // Adjust as needed
            title="DexPay Swap"
            className="border-none rounded-lg"
          />
      </main>
    </div>
  );
}
