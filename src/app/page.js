import BehindTheScenes from "./home/behindthescenes";
import ClientsSay from "./home/clientssay";
import DroneShoots from "./home/droneshoots";
import StatsAndClients from "./home/statsandclients";
import TheVSignWay from "./home/thevsignway";
import WhoWeAre from "./home/whoweare";
import WhyChooseUs from "./home/whychooseus";
import Videopage from "./video/page";




export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-white">
      <div>
      <Videopage />
      <WhoWeAre/>
      <StatsAndClients/>
      <BehindTheScenes/>
      <WhyChooseUs/>
      <TheVSignWay/>
      <DroneShoots/>
      <ClientsSay/>
    </div>
    </div>
  );
}
