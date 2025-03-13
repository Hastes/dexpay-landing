export default function WidgetDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <p className="text-5xl font-semibold mb-7 tracking-wider">
          Widget
        </p>
        <iframe
          src="https://p2p.dextrade.com/swap-view?fromNetworkName=solana&fromTicker=SOL&toNetworkName=solana&toTicker=SOAR&name=MEW&widget=1"
          width="400px"
          height="500px" // Adjust as needed
          title="DexPay Swap"
          className="border-none rounded-lg shadow-2xl"
        />
      </main>
    </div>
  );
}
