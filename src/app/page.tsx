import Banner from "@/components/Banner";
import ClientReview from "@/components/ClientReview";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import GreatTea from "@/components/GreatTea";
import NewsEvent from "@/components/NewsEvent";

const Home = () => {
  return (
    <div>
      <div className="max-w-4/5 mx-auto">
        <Banner></Banner>
        <FeaturedProducts />
        <GreatTea />
        <ClientReview />
        <NewsEvent />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
