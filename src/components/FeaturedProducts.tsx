import MilkTea from "../assets/tea-1.png";
import BlackTea from "../assets/tea-2.png";
import LemonTea from "../assets/tea-3.png";
import GreenTea from "../assets/tea-4.png";
import TeaCard from "./TeaCard";
const teaData = [
  {
    name: "Milk tea",
    description: "Creamer could be repleaced by fresh milk",
    img: MilkTea,
  },
  {
    name: "Balck tea",
    description: "Creamer could be repleaced by fresh milk",
    img: BlackTea,
  },
  {
    name: "Leamon tea",
    description: "Creamer could be repleaced by fresh milk",
    img: LemonTea,
  },
  {
    name: "Green tea",
    description: "Creamer could be repleaced by fresh milk",
    img: GreenTea,
  },
];
const FeaturedProducts = () => {
  return (
    <div className="my-10 text-center">
      <h3 className="text-4xl font-semibold">Our featured products</h3>
      <p className="p-4 text-[#777777]">
        Lorem ipsum dolor sit amet, consectetur adipisicing Vero at, omnis quae{" "}
        <br /> accusamus ullam molestiae excepturi error qui sed nisi.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teaData.map((tea, idx) => (
          <TeaCard
            key={idx}
            name={tea.name}
            description={tea.description}
            img={tea?.img}
          ></TeaCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
