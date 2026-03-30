import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CosmicGallery from "@/components/CosmicGallery"; // Imported
import HudStat from "@/components/Stats";
import Timeline from "@/components/Stats";
import EventReveal from "@/components/EventReveal";
import Zoom from "@/components/Zoom";
import PastSpeakers from "@/components/Speakers";
import Sponsers from "@/components/Sponsers";
import Footer from "@/components/Footer";
import Workshops from "@/components/Workshops"


import CosmicVideos from "@/components/CosmicVideos";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      {/* <div className="page8 remove">
        <Zoom />
      </div> */}
      <Workshops />
      <EventReveal limit={3} />
      <CosmicGallery />
      <CosmicVideos />
      <PastSpeakers />
      <Sponsers />
      <Testimonials />
      <Footer />
    </main>
  );
}
