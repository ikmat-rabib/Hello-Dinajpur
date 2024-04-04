import Advertisement from "./components/ui/Advertisement/Advertisement";
import AllCategory from "./components/ui/AllCategory/AllCategory";
import Banner from "./components/ui/Banner/Banner";
import PopularCategory from "./components/ui/PopularCategory/PopularCategory";
import Sidebar from "./components/ui/Sidebar/Sidebar";
import TopBusiness from "./components/ui/TopBusiness/TopBusiness";


const HomePage = () => {
  return (
    <div  >
      <Banner ></Banner>

      <div className="md:grid md:grid-cols-6 md:gap-1 md:pt-16">
        <div className="col-span-1 hidden md:block">
          <AllCategory></AllCategory>
        </div>
        <div className="col-span-4 ">
          <PopularCategory></PopularCategory>
          <TopBusiness></TopBusiness>
          <div className="col-span-1 sm:block md:hidden">
            <AllCategory></AllCategory>
          </div>
        </div>
        <div className="col-span-1">
          <Sidebar></Sidebar>
        </div>
      </div>
      <Advertisement></Advertisement>
    </div>
  );
};

export default HomePage;