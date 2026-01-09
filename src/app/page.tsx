import { Hero } from "@/components/sections/hero";
import { Countdown } from "@/components/sections/countdown";
import { About } from "@/components/sections/about";
import { Tracks } from "@/components/sections/tracks";
import { Prizes } from "@/components/sections/prizes";
import { Timeline } from "@/components/sections/timeline";
import { PastEvents } from "@/components/sections/past-events";
import { Team } from "@/components/sections/team";
import { FAQ } from "@/components/sections/faq";
import { Sponsors } from "@/components/sections/sponsors";
import { Discord } from "@/components/sections/discord";
import { Winners } from "@/components/sections/winners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Hero />
      <Prizes />
      <About />
      <Sponsors />
      <Tracks />
      <Timeline />
      <PastEvents />
      <Winners visible={false} />
      <Team />
      <Discord />
      <FAQ />
    </div>
  );
}
