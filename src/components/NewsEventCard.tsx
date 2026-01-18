import Image from "next/image";
const NewsEventCard = ({
  time,
  title,
  description,
  img,
}: {
  time: string;
  title: string;
  description: string;
  img: any;
}) => {
  return (
    <div className="flex justify-center">
      <div className="p-6 border border-gray-300 rounded-md max-w-sm">
        <div>
          <Image src={img} alt="News_image_1"></Image>
        </div>
        <div className="space-y-2 mt-5">
          <span className="text-[#777777]">{time}</span>
          <h4 className="text-xl font-semibold">{title}</h4>
          <p className="text-[#777777]">{description}</p>
          <h4 className="font-bold">Learn More</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsEventCard;
