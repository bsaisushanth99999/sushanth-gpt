import openai from "./chatgpt";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const query = async (prompt: string, chatID: string, model: string) => {
  const messages: ChatMessage[] = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: prompt },
  ];
  const res = await openai.chat.completions.create({
    model,
    messages,
    temperature: 0.8,
    max_tokens: 1000,
    top_p: 1,
  });
  return res;
};

export default query;
