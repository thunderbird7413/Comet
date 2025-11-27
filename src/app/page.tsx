import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HudStat from "@/components/Stats";
import Timeline from "@/components/Stats";
import EventReveal from "@/components/EventReveal";
import Zoom from "@/components/Zoom";
import PastSpeakers from "@/components/Speakers";
import Sponsers from "@/components/Sponsers";
import Footer from "@/components/Footer";
import TeamSection from "@/components/Team";
import Workshops from "@/components/Workshops"
// import Workshops from "@/components/Workshops";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <div className="page8">
          <Zoom />
      </div>
      <Workshops />
      <EventReveal />
      <PastSpeakers />
      <Sponsers />
      <TeamSection />
      <Footer />
      {/* <Workshops /> */}
    </main>
  );
}
