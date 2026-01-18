import Image from "next/image";
import ReviewerImg from "../assets/client.png";
const ClientReview = () => {
  return (
    <div className="mb-10 bg-linear-to-r from-[#FF0000] to-[#FF8938] grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-md px-12 py-6">
      <div className="flex justify-center items-center">
        <div className="md:w-5/6 space-y-4">
          <h1 className="text-4xl text-white font-bold">
            Meet Our Super Clients
          </h1>
          <p className="text-[#F4F4F4]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="py-3 px-5 text-[#FF0000] bg-white font-bold rounded-md">
            Show All
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="bg-white rounded-md w-3/4 px-6 py-4 relative top-40 z-10">
          <div className="absolute -top-6 -left-8 border-white border-4 rounded-full">
            <Image src={ReviewerImg} alt="Reviwer_img"></Image>
          </div>
          <p className="text-[#777777]">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <div className="mt-5">
            <h4 className="font-bold">Ilham Yuda</h4>
            <span className="text-[#5D5A6F]">Businessman</span>
          </div>
        </div>
        <div className="bg-white rounded-md w-3/4 px-6 py-4 relative left-20 bottom-30 opacity-70">
          <div className="absolute -top-6 -left-8 border-white border-4 rounded-full">
            <Image src={ReviewerImg} alt="Reviwer_img"></Image>
          </div>
          <p className="text-[#777777]">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <div className="mt-5">
            <h4 className="font-bold">Ilham Yuda</h4>
            <span className="text-[#5D5A6F]">Businessman</span>
          </div>
        </div>

        <div className="bg-white rounded-md w-3/4 px-6 py-4 relative bottom-20 left-20 opacity-70">
          <div className="absolute -top-6 -left-8 border-white border-4 rounded-full">
            <Image src={ReviewerImg} alt="Reviwer_img"></Image>
          </div>
          <p className="text-[#777777]">
            We are providing the best and suitable home insurance services for
            the people who are interested to treatment
          </p>
          <div className="mt-5">
            <h4 className="font-bold">Ilham Yuda</h4>
            <span className="text-[#5D5A6F]">Businessman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
