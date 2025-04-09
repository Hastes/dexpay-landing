export default function WidgetDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FB]">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
      <div className="h-[500px] w-full">
          <iframe
            src="https://p2p.dextrade.com/swap-widget?name=Soarchain&mode=light&toNetworkName=solana&toTicker=SOAR"
            width="100%"
            height="100%"
            title="DexPay Swap"
            style="border: none;"
          />
        </div>
      </main>
    </div>
  );
}
