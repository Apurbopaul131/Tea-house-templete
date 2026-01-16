import Image from "next/image";
import { FaArrowRightLong, FaStar } from "react-icons/fa6";
import BannerImg from "../assets/banner.png";
const Banner = () => {
  return (
    <section className="md:flex items-center">
      {/* text side */}
      <div>
        <h1 className="text-4xl md:text-7xl font-extrabold">
          Its good <br /> tea time at The <br />
          Tea House
        </h1>
        <p className="text-[#777777] my-4">
          Tea and Botanical Solutions Supplier Give Optimum <br /> Satisfaction
          To Your Taste Buds.
        </p>
        <button className="p-3 bg-linear-to-r from-[#FF0000] to-[#FF8938] rounded-md text-white font-bold flex items-center gap-2">
          <span>Explore More</span>
          <FaArrowRightLong className="-rotate-45" />
        </button>
      </div>
      {/* image side */}
      <div className="relative">
        <div>
          <Image
            src={BannerImg}
            width={500}
            height={500}
            alt="banner image"
          ></Image>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 shadow-md p-2 absolute top-70 left-20 rounded-md">
          <div>
            <FaStar className="text-4xl text-[#FFC850]" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">5.00</h2>
            <p className="text-[#777777]">Trust Pilot Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
