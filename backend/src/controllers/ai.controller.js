import { generateContent } from "../services/ai.service.js";

const s = async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({ error: "Prompt must be a non-empty string" });
  }


  try {

    const response = await generateContent(prompt);

    res.status(200).json({ success: true, data: response });
  } catch (error) {

    console.error("Error generating content:", error.message, error.stack);

    res.status(500).json({ error: "Failed to generate content" });
  }
};

export { s };
