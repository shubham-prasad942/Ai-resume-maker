import { useContext, useState } from "react";
import { ResumeContext } from "../Componets/Context/ResumeContext";

const FormExperience = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [summary, setSummary] = useState("");

  const [errors, setErrors] = useState({});

  const context = useContext(ResumeContext);
  if (!context) throw new Error("FormExperience must be used inside ResumeProvider");

  const { setResumeData, resumeData } = context;

  const validateField = (field, value) => {
    if (!value.trim()) return "This field is required";

    // Title (no numbers)
    if (field === "title") {
      const regex = /^[A-Za-z\s'-]+$/;
      if (!regex.test(value)) return "No numbers allowed";
      if (value.length < 2) return "Too short";
    }

    // Company name (no numbers)
    if (field === "name") {
      const regex = /^[A-Za-z\s'-]+$/;
      if (!regex.test(value)) return "No numbers allowed";
    }

    // Location (allow text only)
    if (field === "location") {
      const regex = /^[A-Za-z\s,'-]+$/;
      if (!regex.test(value)) return "Invalid location";
    }

    // Dates (basic check)
    if (field === "startDate" || field === "endDate") {
      if (value.length < 4) return "Invalid date";
    }

    // Summary
    if (field === "summary") {
      if (value.length < 10) return "Too short";
    }

    return "";
  };

  const handleExperience = () => {
    const newErrors = {
      title: validateField("title", title),
      name: validateField("name", name),
      location: validateField("location", location),
      startDate: validateField("startDate", startDate),
      endDate: validateField("endDate", endDate),
      summary: validateField("summary", summary),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    setResumeData((prev) => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          title,
          companyName: name,
          location,
          startDate,
          endDate,
          description: summary,
        },
      ],
    }));

    setTitle("");
    setName("");
    setLocation("");
    setStartDate("");
    setEndDate("");
    setSummary("");
    setErrors({});
  };

  const removeExp = (idx) => {
    const copy = [...resumeData.experiences];
    copy.splice(idx, 1);
    setResumeData((prev) => ({ ...prev, experiences: copy }));
  };

  return (
    <section className="bg-[#fbf7ef] p-6 rounded-xl shadow-sm space-y-4">
      <div className="bg-primary text-white text-center py-2 rounded-md font-semibold">
        EXPERIENCE SECTION
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        
        <div>
          <input
            placeholder="Title"
            type="text"
            className="input"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors((prev) => ({
                ...prev,
                title: validateField("title", e.target.value),
              }));
            }}
          />
          {errors.title && <p className="text-primary text-sm">{errors.title}</p>}
        </div>

        <div>
          <input
            placeholder="Company name"
            type="text"
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({
                ...prev,
                name: validateField("name", e.target.value),
              }));
            }}
          />
          {errors.name && <p className="text-primary text-sm">{errors.name}</p>}
        </div>

        <div>
          <input
            placeholder="Location"
            type="text"
            className="input"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setErrors((prev) => ({
                ...prev,
                location: validateField("location", e.target.value),
              }));
            }}
          />
          {errors.location && <p className="text-primary text-sm">{errors.location}</p>}
        </div>

        <div>
          <input
            placeholder="Start date"
            type="text"
            className="input"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              setErrors((prev) => ({
                ...prev,
                startDate: validateField("startDate", e.target.value),
              }));
            }}
          />
          {errors.startDate && <p className="text-primary text-sm">{errors.startDate}</p>}
        </div>

        <div>
          <input
            placeholder="End date"
            type="text"
            className="input"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              setErrors((prev) => ({
                ...prev,
                endDate: validateField("endDate", e.target.value),
              }));
            }}
          />
          {errors.endDate && <p className="text-primary text-sm">{errors.endDate}</p>}
        </div>

        <div className="md:col-span-3">
          <textarea
            placeholder="Description"
            rows={3}
            className="input"
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
              setErrors((prev) => ({
                ...prev,
                summary: validateField("summary", e.target.value),
              }));
            }}
          />
          {errors.summary && <p className="text-primary text-sm">{errors.summary}</p>}
        </div>
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
            className="bg-primary text-white text-xs px-3 py-1 rounded-lg font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 active:scale-95"
          >
            {exp.companyName || `Experience ${idx + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FormExperience;