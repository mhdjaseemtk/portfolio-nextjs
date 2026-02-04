import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
// --- Reusable Stat Card Component ---
type StatCardProps = {
  label: string;
  value: string;
  valueOnTop?: boolean;
};

const StatCard = ({ label, value, valueOnTop = false }: StatCardProps) => {
  const cardBg = "bg-[#141414]";
  const labelBg = "bg-[#222222]";

  const LabelContainer = () => (
    <div className={`${labelBg} py-3 px-4 rounded-lg w-full`}>
      <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-wider font-medium">
        {label}
      </p>
    </div>
  );

  const ValueText = () => (
    <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
      {value}
    </h3>
  );

  return (
    <div className={`${cardBg} p-5 rounded-2xl flex  flex-col h-full justify-between gap-6 border border-neutral-900`}>
      {valueOnTop ? (
        <>
          <ValueText />
          <LabelContainer />
        </>
      ) : (
        <>
          <LabelContainer />
          <ValueText />
        </>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <>
    <main

      className="jaseem overflow-hidden bg-black relative selection:bg-amber-500 selection:text-white font-inter"
    >

      {/* =======================
          BACKGROUND HERO IMAGE
      ======================== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-[65%] h-full z-0">

          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Tint */}
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10" />

          {/* Hero Image */}
          <Image
            src="/img.png"
            alt="Hero Portrait"
            fill
            className="object-cover overflow-hidden object-top opacity-80"
            priority
          />
        </div>

        {/* Grid Texture */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* =======================
          NAVBAR
      ======================== */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-8 md:px-16 max-w-[1920px] mx-auto">
        <div className="text-xl font-bold tracking-tighter text-white">Jaseem</div>

        <div className="hidden md:flex gap-10 mr-30 text-[14px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          <a href="#home" className="hover:text-white transition-colors">HOME</a>
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#" className="hover:text-white transition-colors">WORK</a>
          <a href="#" className="hover:text-white transition-colors">SERVICES</a>
          <a href="#" className="hover:text-white transition-colors">CONTACT</a>
        </div>

        <div className="md:hidden text-white"><Menu /></div>
      </nav>

      {/* =======================
          MAIN HERO CONTENT
      ======================== */}
      <div className="relative z-40 max-w-[1920px] mx-auto overflow-hidden px-6 md:px-16 flex flex-col justify-center">

        <div className="absolute top-[25%] right-8 md:right-20 text-[9px] font-bold tracking-[0.3em] text-gray-600 uppercase">
          [ BREAK THE NORM ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* LEFT TEXT */}
          <div className="md:col-span-8 mt-60  flex flex-col justify-center items-start">
            <h1 className="font-oswald gap-3 font-bold leading-[0.8] tracking-tighter uppercase text-white flex flex-col items-start">
              <span className="text-[150px]">Innovate</span>
              <span className="text-amber-500 text-[150px]">For Design</span>
              <span className="text-[150px]">Deliver</span>
            </h1>

            <div className="mt-16 flex flex-co md:flex-row gap-8 items-start md:items-center">

              <div className="flex items-center">
                <button className="bg-white text-black px-6 py-3 font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-gray-200 transition rounded-l-sm">
                  LET'S CONTACT
                </button>
                <button className="bg-amber-500 text-black px-4 py-3 hover:bg-amber-400 transition rounded-r-sm">
                  <ArrowUpRight size={15} />
                </button>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed max-w-xs border-l border-gray-800 pl-4">
                Our mission is to elevate your vision through groundbreaking design combining artistic flair with strategic insight.
              </p>
            </div>
          </div>

          {/* RIGHT SPINNER */}
          <div className="hidden md:flex md:col-span-4 justify-end items-end pb-10 pr-10">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text fill="white" fontSize="11" fontWeight="bold" letterSpacing="2">
                  <textPath href="#circlePath" startOffset="0%">a
                    EST • 2023 • NYC • EST • 2023 • NYC •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
      <div>
      </div>

      {/* =======================
          ABOUT + STATS
      ======================== */}
      <div id="about" className="relative z-40 max-w-7xl mx-auto w-full p-6 lg:p-20 overflow-hidden mt-20">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20 mb-24">

          <div className="flex flex-col items-start">
            <span className="text-gray-400 uppercase text-sm mb-10 tracking-widest font-medium">(ABOUT ME)</span>

            <button className="group flex items-center gap-2 transition-transform hover:scale-105">
              <div className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm tracking-wide">
                Let's Contact
              </div>
              <div className="bg-orange-500 p-3 rounded-lg text-black">
                <FiArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>

          <div className="lg:max-w-2xl">
            <p className="text-xl lg:text-[26px] leading-[1.4] text-gray-200 font-light">
              Innovative product designer with a passion for aesthetics and usability. I design purposeful, user-friendly products that blend form and function.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard label="YEARS EXPERIENCES" value="06+" />
          <StatCard label="SUCCESSFUL PROJECTS" value="120+" valueOnTop />
          <StatCard label="TOTAL CLIENT" value="900+" valueOnTop />
          <StatCard label="CLIENT REVENUE" value="+72%" valueOnTop />
        </div>

      </div>

    </main>
    <FeaturedWork/>

            <Services />

    </>
  );
}