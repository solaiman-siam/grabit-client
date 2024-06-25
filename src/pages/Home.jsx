import Categories from "../components/Categories";
import Collection from "../components/Collection";
import CustomerCare from "../components/CustomerCare";
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
      <Collection></Collection>
      <CustomerCare></CustomerCare>
    </div>
  );
}

export default Home;
