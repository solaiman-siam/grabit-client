import Categories from "../components/Categories";
import Deal from "../components/Deal";
import Discount from "../components/Discount";
import NewArrivals from "../components/NewArrivals";
import SliderBanner from "../components/SliderBanner";

function Home() {
  return (
    <div>
      <SliderBanner></SliderBanner>
      <Categories></Categories>
      <Deal></Deal>
      <Discount></Discount>
      <NewArrivals></NewArrivals>
    </div>
  );
}

export default Home;
