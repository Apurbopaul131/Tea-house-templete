import Banner from "@/components/Banner";
import ClientReview from "@/components/ClientReview";
import FeaturedProducts from "@/components/FeaturedProducts";
import GreatTea from "@/components/GreatTea";

const Home = () => {
  return (
    <main className="max-w-4/5 mx-auto">
      <Banner></Banner>
      <FeaturedProducts />
      <GreatTea />
      <ClientReview />
    </main>
  );
};

export default Home;
