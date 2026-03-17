import axios from "axios";
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export const generateResumeWithGemini = async (resumeData) => {
  const prompt = `
You are an AI that generates a professional resume in structured JSON.

RULES:
- Respond ONLY in valid JSON.
- Follow the schema exactly.
- For any field that is empty, incomplete, or weakly written:
   - Generate professional, concise, and impactful content.
   - Improve grammar, wording, and clarity.
   - For 'summary', make it a strong professional introduction.
   - For 'achievements', 'projects', and 'experience', expand and make descriptions impactful.
- Do NOT include explanations, markdown, or extra text.

SCHEMA:
{
  "basicInfo": { ... },
  "achievements": [ ... ],
  "experiences": [ ... ],
  "schoolEducation": { ... },
  "collegeEducation": [ ... ],
  "projects": [ ... ],
  "skills": [ ... ],
  "languages": [ ... ],
  "hobbies": [ ... ]
}

INPUT RESUME DATA:
${JSON.stringify(resumeData, null, 2)}
`;

  const response = await axios.post(`${GEMINI_URL}?key=${GEMINI_API_KEY}`, {
    contents: [{ parts: [{ text: prompt }] }],
  });

  let text = response.data.candidates[0].content.parts[0].text;
  text = text.replace(/```json|```/g, "").trim();
  const structuredResume = JSON.parse(text);
  return structuredResume;
};
