import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import WidgetDemo from "@/pages/WidgetDemo";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cryproswap-widget-demo" component={WidgetDemo} />
      <Route component={NotFound} />
    </Switch>
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
