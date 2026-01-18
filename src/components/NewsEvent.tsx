import GreenTea from "../assets/news-1.png";
import OrangeTea from "../assets/news-2.png";
import TulsiTea from "../assets/news-3.png";
import NewsEventCard from "./NewsEventCard";
const newsEventData = [
  {
    time: "Feb 05, 2027",
    title: "Collecting 8 points for discount",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    img: GreenTea,
  },
  {
    time: "Feb 05, 2027",
    title: "Collecting 8 points for discount",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    img: OrangeTea,
  },
  {
    time: "Feb 05, 2027",
    title: "Collecting 8 points for discount",
    description:
      "There are many variations of passages of Lorem Ipsum available.",
    img: TulsiTea,
  },
];
const NewsEvent = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-semibold text-center">News & Events</h1>
      <p className="text-[#777777] text-center">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, <br /> by injected
        humour, or randomised words which look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {newsEventData.map((event, idx) => (
          <NewsEventCard
            key={idx}
            time={event?.time}
            title={event?.title}
            description={event?.description}
            img={event.img}
          ></NewsEventCard>
        ))}
      </div>
    </div>
  );
};

export default NewsEvent;
