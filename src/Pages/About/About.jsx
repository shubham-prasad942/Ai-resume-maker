import Cta from "../../Componets/Cta";
import Users from "../../Componets/Users";

// About component
const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 space-y-6">
      {/* Header Section */}
      <header className="space-y-3.5 text-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          About Our AI Resume Maker
        </h1>
        <p className="text-base sm:text-xl text-[#484744] font-normal leading-relaxed">
          Simplifying and optimizing the job application process with smart technology.
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
          In today's competitive job market, your resume is your first impression. 
          Our mission is to democratize access to high-quality resume creation by 
          making it{" "}
          <span className="text-primary font-semibold">
            fast, accessible, and intelligently guided
          </span>
          . We aim to give every job seeker the best possible chance to land an interview.
        </p>
      </section>

      {/* Users & CTA */}
      <Users />
      <Cta />
    </div>
  );
};

export default About;