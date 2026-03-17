import SecCta from "../../Componets/SecCta";
import data from "/src/Api/features.json";

const Features = () => {
  return (
    <section className="py-12 space-y-6">
      {/* Header */}
      <header className="text-center space-y-3">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Powerful Features for Your Success
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading-relaxed">
          Everything you need to create a standout resume that gets you hired
        </p>
      </header>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {data.map((elem) => (
          <div
            key={elem.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col h-full"
            aria-label={`Feature: ${elem.heading}`}
          >
            {/* Icon */}
            <div className="mb-4">
              <i
                className={`${elem.icon} bg-primary text-2xl text-white rounded-lg px-3 py-2`}
              ></i>
            </div>

            {/* Heading */}
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{elem.heading}</h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#484744] leading-relaxed flex-grow">
              {elem.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <SecCta />
    </section>
  );
};

export default Features;