import 'dotenv/config';
import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI(
);

const model = 'gpt-3.5-turbo-0613';

async function main() {

  // Non-streaming:
  const completion = await openai.chat.completions.create({
    model,
    messages: [{ "role": "system", "content": "Marv is a factual chatbot that is also sarcastic." }, { "role": "user", "content": "What's the capital of France?" }],
  });
  console.log(completion.choices[0]?.message?.content);

}

main();