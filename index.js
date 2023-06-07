require('dotenv').config({ path: __dirname + '/.env' })

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai")
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"]
const azureApiKey = process.env["AZURE_OPENAI_KEY"]


const prompt1 = 'When was Microsoft founded?'
const prompt2 = 'Who own Microsoft?'
const batchPrompts = [prompt1, prompt2];
const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
const model3 = "text-davinci-003";
const model35 = 'gpt-35-turbo'

async function main() {
    console.log("== Get completions Sample for GPT3 (without batching) ==");
    console.time("gpt3");

    const result_gpt3_1 = await client.getCompletions(model3, prompt1);

    for (const choice of result_gpt3_1.choices) {
        console.log(choice.text.trim());
    }

    const result_gpt3_2 = await client.getCompletions(model3, prompt2);

    for (const choice of result_gpt3_2.choices) {
        console.log(choice.text.trim());
    }

    console.timeEnd("gpt3");


    console.log("\n\n== Get completions Sample for GPT3 (batching) ==");
    console.time("gpt3_batching");

    const result_gpt3_batching = await client.getCompletions(model3, batchPrompts);

    for (const choice of result_gpt3_batching.choices) {
        console.log(choice.text.trim());
    }

    console.timeEnd("gpt3_batching");


    console.log("\n\n== Get completions Sample for GPT35==");
    console.time("chatgpt");

    const result_chatgpt_1 = await client.getChatCompletions(model35, [{ role: "user", content: prompt1 }]);

    for (const choice of result_chatgpt_1.choices) {
        console.log(choice.message.content);
    }

    const result_chatgpt_2 = await client.getChatCompletions(model35, [{ role: "user", content: prompt2 }]);
    for (const choice of result_chatgpt_2.choices) {
        console.log(choice.message.content);
    }

    console.timeEnd("chatgpt");
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});

module.exports = { main };
