import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Showcase from "@/components/Showcase";

import Footer from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Tools />
      <Showcase />

      <Footer />
    </main>
  );
}
