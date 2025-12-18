import axios from "axios";

const GEMINI_API_KEY = import.meta.env.AIzaSyC7OeY9VyoHSTloEy1MohXZMtSAgq4aBy4;

const gemini = axios.create({
  baseURL: "https://generativelanguage.googleapis.com/v1beta",
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateResume = async (formData: any) => {
  const response = await gemini.post(
    `/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      contents: [
        {
          parts: [
            {
              text: `
Generate a professional resume JSON using this data:
${JSON.stringify(formData)}

Return ONLY valid JSON.
              `,
            },
          ],
        },
      ],
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};
