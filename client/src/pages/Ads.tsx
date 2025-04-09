import Header from "@/components/Header";
import HeroSection from "@/components/ad/HeroSection";
import LiquiditySection from "@/components/ad/LiquiditySection";
import WidgetDemo from "./WidgetDemo";

export default function Ads() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiquiditySection />
        <WidgetDemo />
      </main>
    </div>
  );
}
