import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPreview />
      <SelectedWork />
    </main>
  );
}