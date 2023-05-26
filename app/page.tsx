import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Features from "./sections/Features";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
