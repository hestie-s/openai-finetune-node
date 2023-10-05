#!/usr/bin/env -S npm run tsn -T

/**
 * Fine-tuning allows you to train models on your own data.
 *
 * See this guide for more information:
 * - https://platform.openai.com/docs/guides/fine-tuning
 */

import 'dotenv/config';
import {OpenAIClient, AzureKeyCredential} from '@azure/openai';


const base = process.env.OPENAI_API_BASE || "";
const key = process.env.OPENAI_API_KEY || "";

const client = new OpenAIClient(
  base,
  new AzureKeyCredential(key)
);


(async () => {
  try {
    // const { id, created, choices, usage } = await client.getCompletions("test-gpt-35-turbo", ["YOUR PROMPT HERE"]);

    // console.log(id, created, choices, usage)


    const { choices } = await client.getCompletions(
      "test-gpt-35-turbo", // assumes a matching model deployment or model name
      ["Hello, world!"]);
  
    for (const choice of choices) {
      console.log(choice);
    }

  } catch (e) {
    console.log(e)
  }
})();