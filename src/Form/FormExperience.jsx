import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormExperience = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [summary, setSummary] = useState("");

  const context = useContext(ResumeContext);
  if (!context) throw new Error("FormExperience must be used inside ResumeProvider");

  const { setResumeData, resumeData } = context;

  const handleExperience = () => {
    if (!title || !name) return; // prevent empty entries
    setResumeData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        { title, companyName: name, location, startDate, endDate, description: summary },
      ],
    }));
    setTitle("");
    setName("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setSummary("");
  };

  const removeExp = (idx) => {
    const copy = [...resumeData.experiences];
    copy.splice(idx, 1);
    setResumeData(prev => ({ ...prev, experiences: copy }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EXPERIENCE SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          placeholder="Title"
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Company name"
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Location"
          type="text"
          className="input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          placeholder="Start date"
          type="text"
          className="input"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          placeholder="End date"
          type="text"
          className="input"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <textarea
          placeholder="Description"
          rows={3}
          className="input"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleExperience}
          type="button"
          className="bg-primary text-white text-sm sm:text-lg rounded-xl px-5 py-2 font-bold cursor-pointer transition-transform duration-150 active:scale-95"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {resumeData.experiences.map((exp, idx) => (
          <button
            key={idx}
            onClick={() => removeExp(idx)}
            type="button"
            className="
              bg-primary 
              text-white 
              text-xs 
              px-3 py-1 
              rounded-lg 
              font-semibold 
              cursor-pointer 
              transition-all 
              duration-150 
              hover:opacity-90 
              active:scale-95
            "
          >
            {exp.companyName || `Experience ${idx + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FormExperience;