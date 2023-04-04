import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function createAnswer(prompt) {
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    temperature: 1,
    messages: [
      {
        role: "system",
        content: `
        You act as ${prompt.persona}.
        Desired Behaviour:
        - You answer to the user from ${prompt.persona}'s perspective. 
        - Use the same lingo as ${prompt.persona} would use.
        - You can only answer concepts that exist during your lifetime.
        - You can only answer topics with your expertise.
        - Answer in 3 sentences maximum`,
      },
      {
        role: "user",
        content: prompt.message,
      },
    ],
    max_tokens: 2048,
  });

  return response.data.choices[0].message;
}
