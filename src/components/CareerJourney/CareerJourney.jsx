import career from "../../data/career";
import TimelineItem from "./TimelineItem";

const CareerJourney = () => {
  return (
    <section
      id="career"
      className="py-24 px-6 md:px-12 lg:px-24"
      aria-labelledby="career-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2
            id="career-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Career Journey
          </h2>
          <p className="text-text-secondary text-lg">
            My professional path and education
          </p>
        </div>

        <div className="max-w-2xl">
          {career.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              isLast={index === career.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
