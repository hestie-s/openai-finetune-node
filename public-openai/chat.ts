import 'dotenv/config';
import OpenAI from 'openai';

// gets API Key from environment variable OPENAI_API_KEY
const openai = new OpenAI(
);

const model = 'gpt-3.5-turbo';

async function main() {

  // const models = await openai.models.list();
  // console.log(models)

  // Non-streaming:
  const completion = await openai.chat.completions.create({
    model,
    messages: [{ role: 'user', content: 'Say this is a test' }],
  });
  console.log(completion.choices[0]?.message?.content);

  // Streaming:
  const stream = await openai.chat.completions.create({
    model,
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });
  for await (const part of stream) {
    process.stdout.write(part.choices[0]?.delta?.content || '');
  }
  process.stdout.write('\n');
}

main();