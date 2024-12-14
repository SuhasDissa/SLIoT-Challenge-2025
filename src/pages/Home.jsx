import Gallery from "@/components/Gallery";
import About from "../components/About";
import Spotlight from "@/components/Spotlight";
import TimeLine from "@/components/design/TimeLine";

const Home = () => {
  return (
    <div className="w-full">
      <About />
      <Gallery />
      <Spotlight />
      <TimeLine/>
    </div>
  );
};

export default Home;
