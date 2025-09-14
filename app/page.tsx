import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Sidebar from "@/components/sections/Sidebar";
export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="relative">
        <div className="absolute inset-0 bg-[url('/statue.png')] opacity-70 bg-cover bg-center pointer-events-none"></div>

        <div className="relative">
          <Hero />
        </div>
      </div>
      <Sidebar />
    </main>
  );
}
