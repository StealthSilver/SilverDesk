import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Sidebar from "@/components/sections/Sidebar";
import Featured from "@/components/sections/Featured";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Featured />
      <Sidebar />
    </main>
  );
}
