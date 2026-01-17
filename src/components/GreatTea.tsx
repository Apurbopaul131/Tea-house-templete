import Image from "next/image";
import OrangeTea from "../assets/fresh-1.png";
import BlueTea from "../assets/fresh-2.png";
const GreatTea = () => {
  return (
    <section className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="grid grid-cols-2 grid-rows-3 gap-4 border-2">
        <div className="bg-linear-to-r from-[#FF0000] to-[#FF8938] rounded-md"></div>
        <div className="bg-[#E6A6231A] rounded-md row-span-2 p-2">
          <Image
            src={OrangeTea}
            width={177}
            height={266}
            alt="FreshTea-1"
            className="mx-auto"
          ></Image>
        </div>
        <div className="bg-[#5776391A] rounded-md row-span-2 p-2">
          <Image
            src={BlueTea}
            width={177}
            height={266}
            alt="FreshTea-1"
            className="mx-auto"
          ></Image>
        </div>
        <div className="bg-linear-to-r from-[#D9D9D9] to-[#FFFFFF] rounded-md"></div>
      </div>
      <div className="space-y-4 border-2">
        <h1 className="text-4xl font-bold">
          Great Tea, Freshly <br /> Presented
        </h1>
        <p className="text-[#777777]">
          The meaning of gong cha is chanese is to provide the best tea to
          emperor from all possessions . It represents the highest quality and
          self expectation. Establishing in 2006, Gong cha had been deeply
          appreciated by its custoers because of good words of mouth and unique
          customized service orginated from Taiwan.
        </p>
        <h4 className="text-xl font-bold">Unique Taste</h4>
        <p className="text-[#777777]">
          A Unique and different style from other teapots gives a luxurious and
          minimalist impression
        </p>
        <h4 className="text-xl font-bold">Premium Quality</h4>
        <p className="text-[#777777]">
          Premium Quality that makes tea more elegant and more durable when you
          use it.
        </p>
      </div>
    </section>
  );
};

export default GreatTea;
