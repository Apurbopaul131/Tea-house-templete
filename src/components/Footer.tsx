import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import FooterLogo from "../assets/cup.png";
const Footer = () => {
  return (
    <div className="bg-[#FFEEE9] py-12">
      <div className="max-w-4/5 mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <Image src={FooterLogo} alt="Footer_logo"></Image>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#777777] ">Ready to get strated?</p>
            <button className="px-3 py-2 bg-linear-to-r from-[#FF0000] to-[#FF8938] rounded-md text-white font-bold">
              Get Started
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-2 text-[#777777] ">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Insurance</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5">Our Services</h3>
            <ul className="space-y-2 text-[#777777]">
              <li>
                <a href="#">Life Insurance</a>
              </li>
              <li>
                <a href="#">Car Insurance</a>
              </li>
              <li>
                <a href="#">Health Insurance</a>
              </li>
              <li>
                <a href="#">House Insurance</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5">Our Services</h3>
            <ul className="space-y-2 text-[#777777]">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Subscribe to our <br />
              newsletter
            </h3>
            <p className="text-[#777777]">
              <label htmlFor="email">Email address</label>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              className="border-b-2 border-gray-300"
            />
            <button className="ml-1 bg-linear-to-r from-[#FF0000] to-[#FF8938] rounded-full p-1 text-white">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <p className="text-center text-[#777777]">
          © 2027 UIDesign.to - All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
