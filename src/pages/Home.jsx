import Categories from "../components/Categories";
import Deal from "../components/Deal";
import Discount from "../components/Discount";
import SliderBanner from "../components/SliderBanner";

function Home() {
  return (
    <div>
      <SliderBanner></SliderBanner>
      <Categories></Categories>
      <Deal></Deal>
      <Discount></Discount>
    </div>
  );
}

export default Home;
