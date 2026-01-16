import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";

const Home = () => {
  return (
    <main className="max-w-4/5 mx-auto">
      <Banner></Banner>
      <FeaturedProducts />
    </main>
  );
};

export default Home;
