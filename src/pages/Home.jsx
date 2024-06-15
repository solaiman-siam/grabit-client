import Categories from "../components/Categories";
import Deal from "../components/Deal";
import SliderBanner from "../components/SliderBanner";

function Home() {
  return (
    <div>
      <SliderBanner></SliderBanner>
      <Categories></Categories>
      <Deal></Deal>
    </div>
  );
}

export default Home;
