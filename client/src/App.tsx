import { Router as Wouter, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WidgetDemo from "@/pages/WidgetDemo";
import { useHashLocation } from "wouter/use-hash-location";
import Ads from "./pages/Ads";

function Router() {
  return (
    <Wouter hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route path="/ads" component={Ads} />
      <Route path="/widget-demo" component={WidgetDemo} />
      {/* <Route component={NotFound} /> */}
    </Wouter>
  );
}

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
