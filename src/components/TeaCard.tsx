import Image from "next/image";

const TeaCard = ({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: any;
}) => {
  return (
    <div
      className="bg-gray-100 p-7 rounded-[10px]
    "
    >
      <div className="max-w-33.75 mx-auto">
        <Image src={img} width={135} height={212} alt="coffe image"></Image>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="text-[#777777]">{description}</p>
      </div>
    </div>
  );
};

export default TeaCard;
