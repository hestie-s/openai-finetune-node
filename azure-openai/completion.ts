import 'dotenv/config';
import { Configuration, OpenAIApi } from "azure-openai";



(async () => {
  try {

    const openAiApi = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        // add azure info into configuration
        azure: {
          apiKey: process.env.OPENAI_API_KEY,
          endpoint: process.env.OPENAI_API_BASE,
          // deploymentName is optional, if you donot set it, you need to set it in the request parameter
          deploymentName: "test-gpt-35-turbo",
        }
      }),
    );

    const response = await openAiApi.createCompletion({
      model: "test-gpt-35-turbo",
      prompt: "Write a job description for the following job title: 'Business Intelligence Analyst'.",
      "temperature": 1,
      "top_p": 1,
      "frequency_penalty": 0,
      "presence_penalty": 0,
      "max_tokens": 600,
      "stop": null
    });

    console.log(response)


  } catch (error) {
    console.log(error)
  }
})();


