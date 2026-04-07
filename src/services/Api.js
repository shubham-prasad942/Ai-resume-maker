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
- Keep the resume concise and optimized for a single page (max ~700 words total).

CONTENT OPTIMIZATION RULES:
- Summary: max 2-3 lines.
- Experience description: max 2 lines OR 2 bullet-style sentences.
- Project description: max 2 lines.
- Achievements description: max 1-2 lines.
- Avoid long paragraphs. Use short, impactful sentences.
- Use concise, professional language.

DATA FORMAT RULES:
- "skills": array of strings
- "languages": array of strings (e.g. ["English", "Hindi"])
- "hobbies": array of strings (e.g. ["Coding", "Reading"])
- Do NOT return objects inside hobbies/languages

STRICT INSTRUCTIONS:
- Output MUST be valid JSON.
- Do not wrap in backticks.
- Do not include any explanation or text outside JSON.
- Ensure all keys exist even if empty.

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
