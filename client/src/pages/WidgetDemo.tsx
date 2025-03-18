export default function WidgetDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <p className="text-4xl font-semibold mb-7 tracking-wider">
          Your Website
        </p>
        <iframe
          src="https://p2p.dextrade.com/swap-widget?fromNetworkName=solana&fromTicker=USDT&toNetworkName=solana&toTicker=SOAR&name=DEXTRADE"
          width="100%"
          height="600px"
          title="DexPay Swap"
          className="border-none rounded-lg"
        />
      </main>
    </div>
  );
}
