import 'dotenv/config';
import { Configuration, OpenAIApi } from "azure-openai"; 



(async () => {
  try {

    console.log(process.env)

    const openAiApi = new OpenAIApi(
      new Configuration({
         apiKey: process.env.OPENAI_API_KEY,
         // add azure info into configuration
         azure: {
            apiKey: process.env.OPENAI_API_KEY,
            endpoint: process.env.OPEN_API_BASE,
            // deploymentName is optional, if you donot set it, you need to set it in the request parameter
            deploymentName: "test-gpt-35-turbo"
         }
      }),
    );


    const response = await openAiApi.createCompletion({
      model: "test-gpt-35-turbo",
      prompt: "Hello",
      max_tokens: 100,
      temperature: 0.9,
      top_p: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
      best_of: 1,
    });

    console.log(response)


  } catch (e) {
    console.log(e)
  }
})();


