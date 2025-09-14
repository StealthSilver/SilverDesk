import Featured from "@/components/sections/Featured";

const Hero = () => {
  return (
    <section className="flex flex-col h-screen relative text-[#e34e30]">
      <div className="flex-1 flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">Welcome to Silver's Desk</h1>
          <p className="mt-4 text-lg">A place for essays, stories & poems</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <Featured />
      </div>
    </section>
  );
};

export default Hero;
