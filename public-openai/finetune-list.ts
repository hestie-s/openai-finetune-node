import 'dotenv/config';
import OpenAI from 'openai';
import { FineTuningJobEvent } from 'openai/resources/fine-tuning';

// gets API Key from environment variable OPENAI_API_KEY
const client = new OpenAI(
);

const model = 'gpt-3.5-turbo';


async function main() {

  const events: Record<string, FineTuningJobEvent> = {};

  console.log(`Get fine-tuning jobs`);
  const jobs = await client.fineTuning.jobs.list()
  console.log(jobs)

  const fineTune = await client.fineTuning.jobs.retrieve('ftjob-KhxMIppWSJprxWk2JkjCO8oY');
  console.log(`${fineTune.status}`);

  const { data } = await client.fineTuning.jobs.listEvents(fineTune.id, { limit: 100 });
  for (const event of data.reverse()) {
    if (event.id in events) continue;
    events[event.id] = event;
    const timestamp = new Date(event.created_at * 1000);
    console.log(`- ${timestamp.toLocaleTimeString()}: ${event.message}`);
  }

  // use fine tuned model

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
})