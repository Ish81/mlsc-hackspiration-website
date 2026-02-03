import { Hero } from "@/components/sections/hero";
import { RobotScene } from "@/components/3d/robot-scene";
import { CityScene } from "@/components/3d/city-scene";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("@/components/sections/countdown").then(mod => mod.Countdown));
const About = dynamic(() => import("@/components/sections/about").then(mod => mod.About));
const Tracks = dynamic(() => import("@/components/sections/tracks").then(mod => mod.Tracks));
const Prizes = dynamic(() => import("@/components/sections/prizes").then(mod => mod.Prizes));
const Eligibility = dynamic(() => import("@/components/sections/eligibility").then(mod => mod.Eligibility));
const Timeline = dynamic(() => import("@/components/sections/timeline").then(mod => mod.Timeline));
const PastEvents = dynamic(() => import("@/components/sections/past-events").then(mod => mod.PastEvents));
const Team = dynamic(() => import("@/components/sections/team").then(mod => mod.Team));
const FAQ = dynamic(() => import("@/components/sections/faq").then(mod => mod.FAQ));
const Sponsors = dynamic(() => import("@/components/sections/sponsors").then(mod => mod.Sponsors));
const Discord = dynamic(() => import("@/components/sections/discord").then(mod => mod.Discord));
const Winners = dynamic(() => import("@/components/sections/winners").then(mod => mod.Winners));

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen w-full overflow-hidden relative">
        <CityScene />
        <Hero />
        <RobotScene />
        {/* Robot is global fixed, this is the spacer for its 'own page' */}
        <div className="min-h-[500px] w-full flex items-center justify-center pointer-events-none bg-black/20">
          {/* Empty space for the robot to inhabit */}
        </div>
        <Prizes />
        <About />
        <Sponsors />
        <Tracks />
        <Eligibility />
        <Timeline />
        <PastEvents />
        <Winners visible={false} />
        <Team />
        <Discord />
        <FAQ />
      </div>
    </div>
  );
}
