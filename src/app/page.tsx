import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Integration from "@/components/Integration";
import Billing from "@/components/Billing";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
// footer

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Dashboard />
      <Integration />
      <Billing />
      <Pricing />
      <WhyUs />
      <Footer />
    </div>
  );
}
