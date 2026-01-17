import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import GreatTea from "@/components/GreatTea";

const Home = () => {
  return (
    <main className="max-w-4/5 mx-auto">
      <Banner></Banner>
      <FeaturedProducts />
      <GreatTea />
    </main>
  );
};

export default Home;
