import SecCta from "../../Componets/SecCta";
import data from "/src/Api/features.json";
interface featuresConfig {
  id: number;
  heading: string;
  description: string;
  icon: string;
}

const Features = () => {
  return (
    <section className="py-12 space-y-3.5">
      <h1 className="text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading ">
        Powerful Features for Your Success
      </h1>
      <p className="text-center text-base sm:text-xl text-[#484744] font-normal leading">
        Everything you need to create a standout resume that gets you hired
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3.5">
        {data.map((elem: featuresConfig, idx: number) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col"
          >
            {/* Icon */}
            <div className="mb-4">
              <i
                className={`${elem.icon} bg-primary text-2xl text-white rounded-lg px-3 py-2`}
              ></i>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {elem.heading}
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#484744] leading-relaxed flex-grow">
              {elem.description}
            </p>
          </div>
        ))}
      </div>
      <SecCta />
    </section>
  );
};

export default Features;
