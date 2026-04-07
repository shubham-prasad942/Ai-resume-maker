import Cta from "../components/common/Cta";
import Users from "../components/layout/Users";
import { ABOUT_CONTENT } from "../constants/about";

// About component
const About = () => {
 const description = "Create a job-ready resume quickly with AI.";
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 space-y-6">
      {/* Header Section */}
      <header className="space-y-3.5 text-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
         {ABOUT_CONTENT.title}
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading-relaxed">
          Simplifying and optimizing the job application process with smart
          technology.
        </p>
      </header>

      {/* Mission Statement */}
      <section
        className="bg-[#f2defb] p-8 rounded-lg shadow-xl mb-12 space-y-3.5"
        aria-label="Mission Statement"
      >
        <h2 className="font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Our Mission
        </h2>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading-relaxed">
        {ABOUT_CONTENT.section}
        </p>
      </section>

      {/* Users & CTA */}
      <Users />
      <Cta title={"Your Smart Resume Partner"} description={description} />
    </div>
  );
};

export default About;
