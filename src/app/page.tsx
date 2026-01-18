import Banner from "@/components/Banner";
import ClientReview from "@/components/ClientReview";
import FeaturedProducts from "@/components/FeaturedProducts";
import GreatTea from "@/components/GreatTea";
import NewsEvent from "@/components/NewsEvent";

const Home = () => {
  return (
    <main className="max-w-4/5 mx-auto">
      <Banner></Banner>
      <FeaturedProducts />
      <GreatTea />
      <ClientReview />
      <NewsEvent />
    </main>
  );
};

export default Home;
