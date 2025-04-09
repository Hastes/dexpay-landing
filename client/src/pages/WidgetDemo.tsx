export default function WidgetDemo() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5FB]">
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <iframe
          src="http://localhost:5173/swap-widget?name=Pixel&mode=light"
          width="100%"
          height="600px"
          title="DexPay Swap"
        />
      </main>
    </div>
  );
}
